import project1 from "../assets/project1.png";
import project1a from "../assets/project1a.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    id: "prasasti",
    title: "PRASASTI-PN CBI",
    category: "Web Application",
    description: "Website Pengajuan Surat Keterangan Tidak Pernah Terpidana Pengadilan Negeri Cibinong, lengkap dengan fitur pengajuan surat oleh user, pembuatan surat menggunakan PDF generator oleh admin, serta verifikasi surat oleh verifikator sebelum dikirim ke user.",
    images: [{ url: project1 }, { url: project1a }],
    features: [
      "Pengajuan surat oleh user.",
      "Pembuatan surat menggunakan PDF generator oleh admin.",
      "Verifikasi surat oleh verifikator sebelum dikirim ke user.",
    ],
    summary: ["Surat Keterangan Tidak Pernah Terpidana", "Alur user, admin, dan verifikator", "Pengadilan Negeri Cibinong"],
  },
  {
    id: "arsip-perencana",
    links: [{ label: "Kunjungi Website", url: "https://arsipperencana.vercel.app/" }],
    title: "Arsip Perencana",
    category: "Architecture Website",
    description: "Website jasa arsitektur yang memperkenalkan Arsip Perencana, menampilkan portofolio desain, dan menyediakan akses konsultasi.",
    images: [{ url: project2 }],
    features: ["Halaman utama dengan visual desain rumah.", "Navigasi layanan, portofolio, dan paket.", "Tombol konsultasi melalui WhatsApp."],
    summary: ["Jasa arsitektur", "Portofolio desain bangunan", "Presentasi teknologi BIM"],
  },
  {
    id: "sri-suntari",
    title: "SriSuntari",
    category: "Mobile Application",
    description: "Aplikasi skrining stunting mandiri untuk Dinas Kesehatan Kabupaten Fak-Fak. Dikembangkan menggunakan Flutter dengan kuis sesuai usia anak dan penggunaan secara offline.",
    images: [{ url: project3 }],
    technologies: ["Flutter"],
    features: ["Pendaftaran dan validasi data anak.", "Kuis skrining yang disesuaikan dengan usia anak.", "Tampilan hasil kuis untuk membantu pemantauan oleh orang tua."],
    summary: ["Skrining stunting mandiri", "Penggunaan offline", "Dinas Kesehatan Kabupaten Fak-Fak"],
  },
  {
    id: "edulontara",
    links: [
      { label: "Tonton di YouTube", url: "https://www.youtube.com/watch?v=p7Zh2pxHxmM&t=186s" },
      { label: "Jurnal", url: "https://ojs.unitama.ac.id/index.php/inspiration/article/view/10" },
    ],
    title: "Edulontara",
    category: "Educational Game",
    description: "Game animasi 3D sebagai media pembelajaran aksara Lontara (Bugis), dibuat sebagai proyek skripsi menggunakan Unity 3D dan bahasa pemrograman C#.",
    images: [{ url: project4 }],
    technologies: ["Unity 3D", "C#"],
    features: ["Materi pengenalan huruf dan tanda baca aksara Lontara.", "Visual animasi 3D sebagai media pembelajaran.", "Kuis dengan metode Shuffle Random untuk pengacakan animasi."],
    summary: ["Pembelajaran aksara Lontara", "Game edukasi dengan animasi 3D", "Proyek skripsi"],
  },
];

export default projects;
