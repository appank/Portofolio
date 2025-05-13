import { IconButton, Wrap, WrapItem, Box, Flex, Image, Text, Stack, Badge, HStack, Circle, VStack, SimpleGrid, Button, ButtonGroup, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import DashboardLayout from "../components/DashboardLayout";
import { FaInstagram,  FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa"; 
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    nowa: "",
    catatan: "",
  });

  const toast = useToast({position: "top", duration: 5000, isClosable: true});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://cv-appank-dev.vercel.app/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description: result.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormData({ name: "", nowa: "", catatan: "" });
      } else {
        throw new Error(result.error || "Gagal mengirim data");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

 // Warna-warna badge Chakra UI yang umum
const colorSchemes = ["teal", "blue", "green", "purple", "orange", "pink", "red", "cyan", "yellow"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://cv-appank-dev.vercel.app/products");
        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <DashboardLayout>
      {/* Home Section */}
      <Box
      id="home"
      minH="auto"
      px={{ base: 4, md: 16 }}
      pt={{ base: "50px", md: "120px" }} // sedikit dikurangi biar lebih pas
      pb={{ base: 8, md: 16 }}
      bg="gray.50"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{ base: 8, md: 16 }}
        h="100%"
      >
        {/* Image Section */}
        <Image
          src="https://raw.githubusercontent.com/Mr-Shadow-Cyber/imgporto/refs/heads/main/img.21931212212.jpg"
          boxSize={{ base: "200px", md: "300px" }}
          borderRadius="full"
          objectFit="cover"
          alt="Baso Arfan Efendy"
          mb={{ base: 6, md: 0 }}
        />
      
        {/* Text Section */}
        <Box textAlign={{ base: "center", md: "left" }} maxW="600px">
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="teal.600" mb={2}>
            I'm Baso Arfan Efendy
          </Text>

          <Stack direction="row" spacing={3} justify={{ base: "center", md: "flex-start" }} mb={4}>
            <Badge colorScheme="teal">Programmer</Badge>
            <Badge colorScheme="green">Graphic Design</Badge>
            <Badge colorScheme="red">UI/UX Design</Badge>
          </Stack>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" mb={6} textAlign={{ base: "justify" }}>
            Seorang Programmer dan UI/UX Design lulusan Teknik Informatika Universitas Dipa Makassar. Mahir dalam pengembangan aplikasi Android dan Website menggunakan  Flutter dan React, serta berpengalaman dalam merancang desain UI/UX yang efisien dan user-friendly. Terampil menggunakan alat desain seperti Figma untuk menciptakan aplikasi yang mudah diakses dan menyenangkan bagi pengguna.
          </Text>

          {/* Social Media Icons */}
          <Wrap spacing="16px" mt={4} justify={{ base: "center", md: "flex-start" }}>
          <WrapItem>
      <Button
        leftIcon={<i class="ci ci-github"></i>}
        p={5}
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        color="gray.600"
        border="1px solid #ccc"
        onClick={() =>
          window.open(
            "https://github.com/appank"
          )
        }
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.03)",
          transition: "0.3s",
        }}
      >
        @appank
      </Button>
    </WrapItem>
   
    <WrapItem>
      <Button
        leftIcon={<i class="ci ci-tiktok"></i>}
        p={5}
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        color="gray.600"
        border="1px solid #ccc"
        onClick={() =>
          window.open(
            "https://www.tiktok.com/@laimonedev"
          )
        }
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.03)",
          transition: "0.3s",
        }}
      >
        @laimonedev
      </Button>
    </WrapItem>
    <WrapItem>
      <Button
        leftIcon={<i className="ci ci-instagram" />}
        p={5}
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        color="gray.600"
        border="1px solid #ccc"
        onClick={() =>
          window.open("https://www.instagram.com/baso_arfan_efendy")
        }
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.03)",
          transition: "0.3s",
        }}
      >
        @baso_arfan_efendy
      </Button>
    </WrapItem>

    <WrapItem>
      <Button
        leftIcon={<i class="ci ci-linkedin"></i>}
        p={5}
        bg="white"
        boxShadow="md"
        borderRadius="xl"
        color="gray.600"
        border="1px solid #ccc"
        onClick={() => window.open("https://id.linkedin.com/in/baso-arfan-efendy-2570111b3")}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.03)",
          transition: "0.3s",
        }}
      >
        @baso_arfan_efendy
      </Button>
    </WrapItem>
  </Wrap>
        </Box>
      </Flex>
    </Box>
    {/* About Section */}
   
    <Box id="about" minH="auto" bg="gray.100" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={4} py={10} borderRadius={"2xl"} boxShadow={"md"}>
  
  {/* Judul di Atas */}
  <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="teal.600" mb={8} textAlign="center">
    About Me
  </Text>

  {/* Konten Flex (Gambar + Text) */}
  <Flex
    direction={{ base: "column", md: "row" }}
    align="center"
    justify="center"
    gap={{ base: 8, md: 16 }}
    w="full"
    maxW="1200px"
    py={8}
  >
    {/* Gambar */}
    <Image
      height={{ base: "300px", md: "400px" }}
      objectFit="cover"
      borderRadius="md"
      src="https://raw.githubusercontent.com/Mr-Shadow-Cyber/imgporto/refs/heads/main/profile21313121834839.JPG"
      alt="About Image"
    />

    {/* Text */}
    <Box textAlign={{ base: "start", md: "left" }} maxW="600px" w="full" position="relative">
      
      {/* Badges */}
      <HStack spacing={3} justify={{ base: "center", md: "flex-start" }} mb={6}>
        <Badge colorScheme="teal">#Education</Badge>
        <Badge colorScheme="green">#Experience</Badge>
      </HStack>

      {/* Pendidikan */}
      <Text fontSize="2xl" fontWeight="bold" color="teal.600" mb={6}>
        Education
      </Text>

      <Box position="relative" pl={{ base: 4, md: 6 }}>
        <Box position="absolute" top={0} left={{ base: "12px", md: "20px" }} width="2px" height="100%" bg="teal.500" zIndex={0} />
        <VStack spacing={8} align="start" position="relative" zIndex={1}>
          <Flex align="center" position="relative" pl={{ base: 6, md: 8 }}>
           
            <Box pl={4}>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="teal.600">2017 s/d 2021 - Universitas Dipa Makassar</Text>
              <Text fontSize="sm" color="gray.600">Teknik Informatika</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Experience */}
      <Text fontSize="2xl" fontWeight="bold" color="teal.600" mt={10} mb={6}>
        Experience
      </Text>

      <Box position="relative" pl={{ base: 4, md: 6 }}>
        <Box position="absolute" top={0} left={{ base: "12px", md: "20px" }} width="2px" height="100%" bg="teal.500" zIndex={0} />
        <VStack spacing={8} align="start" position="relative" zIndex={1}>
          <Flex align="center" position="relative" pl={{ base: 6, md: 8 }}>
           
            <Box pl={4}>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="teal.600">2021 s/d 2024 - Google Play Console</Text>
              <Text fontSize="sm" color="gray.600">Android Developer - Freelance</Text>
            </Box>
          </Flex>

          <Flex align="center" position="relative" pl={{ base: 6, md: 8 }}>
            <Box pl={4}>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="teal.600">2020 - Dinas Kependudukan dan Pencatatan Sipil Kota Makassar</Text>
              <Text fontSize="sm" color="gray.600">Kuliah Kerja Lapangan Plus - Internship</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

    </Box>
  </Flex>
</Box>


     {/* Services Section */}
<Box id="services" minH="auto" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={6} py={10}>
  <Text fontSize="4xl" fontWeight="bold" color="teal.600" mb={10}>
    Our Services
  </Text>

  <SimpleGrid columns={{ base: 3, md: 9 }} spacing={6}>
    {/* Item 1 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/react/react.svg" alt="React" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">React</Text>
    </Box>

    {/* Item 2 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/javascript/javascript.svg" alt="JavaScript" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">JavaScript</Text>
    </Box>

    {/* Item 3 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/expressjs/expressjs.svg" alt="Express.js" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Express</Text>
    </Box>

    {/* Item 4 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/firebase/firebase.svg" alt="Firebase" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Firebase</Text>
    </Box>

     {/* Item 5 */}
     <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/java/java.svg" alt="Java" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Java</Text>
    </Box>

     {/* Item 6 */}
     <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/dart/dart.svg" alt="Dart" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Dart</Text>
    </Box>
     {/* Item 6 */}
     <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/flutter/flutter.svg" alt="Flutter" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Flutter</Text>
    </Box>
    {/* Item 7 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/mysql/mysql-vertical.svg" alt="Mysql" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Mysql</Text>
    </Box>
    {/* Item 8 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/supabase/supabase.svg" alt="MongiDB" boxSize="80px" mx="auto" />
      <Text mt={4} fontWeight="bold" color="gray.600">Supabase</Text>
    </Box>
  </SimpleGrid>
  <Box height="40px" />
  <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
    {/* Item 1 */}
  <Box
    textAlign="left"
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="xl"
    _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
  >
    <Image
      src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/google/google.svg"
      alt="React"
      boxSize="80px"
      mx="inherit"
      mb={4}
    />
    <Text fontSize="xl" fontWeight="bold" color="teal.600">
    0Auth2
    </Text>
    <Text mt={2} fontSize="sm" color="gray.500">
      Membuat Google 0Auth2 Sebagai Authentikasi User Menggunakan Express.js
    </Text>
  </Box>

   {/* Item 2 */}
   <Box
    textAlign="left"
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="xl"
    _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
  >
    <Image
      src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/firebase/firebase.svg"
      alt="React"
      boxSize="80px"
      mx="inherit"
      mb={4}
    />
    <Text fontSize="xl" fontWeight="bold" color="teal.600">
      Firebase
    </Text>
    <Text mt={2} fontSize="sm" color="gray.500">
      Membuat Firebase Sebagai Authentikasi User Atau sebagai Reltime Database
    </Text>
  </Box>
  {/* Item 3 */}
  <Box
    textAlign="left"
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="xl"
    _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
  >
    <Image
      src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/mysql/mysql-vertical.svg"
      alt="React"
      boxSize="80px"
      mx="inherit"
      mb={4}
    />
    <Text fontSize="xl" fontWeight="bold" color="teal.600">
      Mysql
    </Text>
    <Text mt={2} fontSize="sm" color="gray.500">
      Membuat CRUD Sebagai Database atau Authentikasi Menggunakan Express.js
    </Text>
  </Box>
  <Box
    textAlign="left"
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="xl"
    _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
  >
    <Image
      src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/supabase/supabase.svg"
      alt="React"
      boxSize="80px"
      mx="inherit"
      mb={4}
    />
    <Text fontSize="xl" fontWeight="bold" color="teal.600">
    Supabase
    </Text>
    <Text mt={2} fontSize="sm" color="gray.500">
      Membuat Supabase Sebagai Authentikasi User
    </Text>
  </Box>

  </SimpleGrid>
</Box>
  {/* Portofolio Section */}
  
  <Box id="portfolio" minH="auto" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={6} py={10}>
        <Text fontSize="4xl" fontWeight="bold" color="teal.600">
          Portofolio
        </Text>
        <Box height="40px" />
        
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
  {products.map((item) => (
    <Box
      key={item.id}
      p={6}
      bg="white"
      boxShadow="md"
      borderRadius="xl"
      _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "0.3s" }}
    >
      {item.images?.length > 0 && (
        <Image
          src={item.images[0].url}
          alt={item.title}
          boxSize="auto"
          mx="auto"
          mb={4}
        />
      )}
      
      <Text fontSize="xl" fontWeight="bold" color="teal.600">
        {item.title}
      </Text>

   <HStack spacing={3} justify={{ base: "left", md: "flex-start" }} mb={6}>
  {item.labels.map((label, index) => (
    <Badge key={index} colorScheme={colorSchemes[index % colorSchemes.length]}>
      {label}
    </Badge>
  ))}
</HStack>
      <Text mt={2} fontSize="sm" color="gray.500" textAlign="initial">
  {
    item.content
      .replace(/<a[^>]*>.*?<\/a>/g, '')          // Hapus tag <a> dan isinya
      .replace(/<[^>]*>?/gm, '')                 // Hapus tag HTML lainnya
      .replace(/&[^;\s]+;/g, '')                 // Hapus HTML entities seperti &nbsp;
      .slice(0, 500)
  }...
</Text>
      {/* Tombol Visit Link */}
      {item.hasLink && (
        <ButtonGroup size="sm" variant="outline" >
        <Button
          as="a"
          href={item.link}
          target="_blank"
          colorScheme="teal"
          size="sm"
          mt={4}
          width="full"
        >
          Visit Link
        </Button>
        </ButtonGroup>
      )}
    </Box>
  ))}
</SimpleGrid>


        
      </Box>


      <Box
  id="contact"
  minH="auto"
  bg="white"
  display="flex"
  alignItems="center"
  justifyContent="center"
  boxShadow="md"
  borderRadius="xl"
  p={6}
>
  <Box w="100%" maxW="6xl"  borderRadius="xl" p={8}>
    {/* Judul */}
    <Box textAlign="center" mb={8}>
    <Text fontSize="4xl" fontWeight="bold" color="teal.600">
    Contact Details
        </Text>
      {/* <Text fontSize="2xl" fontWeight="bold" color="teal.600">
        Contact Details
      </Text> */}
      <Text fontSize="sm" color="gray.500">
        Menerima Pembuatan Aplikasi Mobile, Software dan Website. Anda Bisa Menghubungi saya melalui From dibawa ini.
      </Text>
    </Box>

    {/* Form */}
    <Flex direction={{ base: "column", md: "row" }} gap={6}>
      {/* Kiri: Nama & Email */}
      <Box flex="1">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name<span style={{ color: 'red' }}>*</span></FormLabel>
            <Input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
          </FormControl>

          <FormControl>
            <FormLabel>No WhatsApp<span style={{ color: 'red' }}>*</span></FormLabel>
            <Input
                name="nowa"
                placeholder="Enter your WhatsApp number"
                value={formData.nowa}
                onChange={handleChange}
              />
          </FormControl>
        </Stack>
      </Box>

      {/* Kanan: Address */}
      <Box flex="1">
        <FormControl>
          <FormLabel>Catatan<span style={{ color: 'red' }}>*</span></FormLabel>
          <Textarea
              name="catatan"
              placeholder="Enter your catatan"
              value={formData.catatan}
              onChange={handleChange}
            />
        </FormControl>
      </Box>
    </Flex>

    {/* Tombol di tengah */}
    <Box textAlign="left" mt={8}>
    <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  </Box>
</Box>
<Box
      as="footer"
      bg=""
      py={4}
      mt={10}
      textAlign="center"
      w="100%"
    >
      <Stack direction="row" justify="center" spacing={2} p={4}>
        <Badge colorScheme="blue">#React</Badge>
    <Badge colorScheme="green">#Express.js</Badge>
    <Badge colorScheme="teal">#Chakra UI</Badge>
      </Stack>
      <Text fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} All rights reserved .by Baso Arfan Efendy
      </Text>
    </Box>
    </DashboardLayout>
    
  );
}

export default Home;
