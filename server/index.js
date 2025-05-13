const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
const axios = require("axios");
const cheerio = require('cheerio');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Autentikasi ke Google Sheets API menggunakan variabel lingkungan terpisah
const credentials = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN
};

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

// ID dari Google Spreadsheet kamu (ambil dari environment variable)
const spreadsheetId = process.env.SPREADSHEET_ID;

// Ambil BLOG_ID dan API_KEY dari environment variables
const BLOG_ID = process.env.BLOG_ID;
const API_KEY = process.env.API_KEY;


app.get("/products", async (req, res) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`);
    const posts = response.data.items;

    if (!posts || posts.length === 0) {
      console.log("✅ Tidak ada postingan ditemukan di blog.");
      return res.status(404).json({ message: "Tidak ada postingan ditemukan" });
    }

    const processedPosts = posts.map(post => {
      const $ = cheerio.load(post.content || '');
      const firstImage = $('img').first().attr('src');

      const firstLink = [];
      $('a').each((i, el) => {
        const link = $(el).attr('href');
        if (link && !link.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i)) {
          firstLink.push(link);
        }
      });

      return {
        id: post.id,
        title: post.title,
        content: post.content,
        images: firstImage ? [{ url: firstImage }] : [],
        labels: post.labels || [],
        link: firstLink.length > 0 ? firstLink : null,
        hasLink: firstLink.length > 0,
      };
    });

    console.log(`✅ Berhasil mengambil ${processedPosts.length} postingan dari blog.`);
    res.json(processedPosts);
  } catch (error) {
    console.error("❌ Error mengambil produk:", error.response?.data || error.message);
    res.status(500).json({ message: "Gagal mengambil data", error: error.message });
  }
});

  // Endpoint API untuk menambahkan data
app.post("/add", async (req, res) => {
  const { name, nowa, catatan } = req.body;

  if (!name || !nowa || !catatan) {
    return res.status(400).json({ error: "Data Yang anda masukan belum lengkap" });
  }

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const id = Date.now();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[id, name, nowa, catatan]],
      },
    });


    res.status(200).json({ message: "✅ Data berhasil DiKirim Kami akan menghubungi anda Terimakasih" });
  } catch (error) {
    console.error("❌ Error saat menyimpan ke Google Sheets:", error.message);
    res.status(500).json({ error: "Gagal menyimpan data ke Google Spreadsheet." });
  }
});

// Export the Express app as a handler for Vercel
module.exports = (req, res) => app(req, res);

// (Optional) Jalankan server lokal untuk pengembangan
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server berjalan di http://localhost:${port}`);
  });
}