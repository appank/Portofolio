import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Button,
  Text,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,

} from '@chakra-ui/react';
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
export default function Projects() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // effect dan pengguna api key blogger v3
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://cv-appank-dev.vercel.app/products");
        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Tambahkan ini
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Pastikan loading false juga saat error
      }
    };

    fetchProducts();
  }, []);
  return (
    <DashboardLayout>
      <Heading fontSize="5xl" fontWeight="bold" mb={4}>
        " <Text as="span" bgGradient="linear(to-r, cyan.400, teal.500)" bgClip="text">Projects</Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {loading
          ? // Tampilkan Skeleton jika loading
          Array.from({ length: 4 }).map((_, idx) => (
            <Box
              key={idx}
              p={4}
              borderWidth="1px"
              borderColor="teal.600"
              boxShadow="md"
              minW={"300px"}
              maxW={"300px"}
              borderRadius="xl"
              height="100%"
            >
              <HStack width="full" mb={4}>
                <SkeletonText noOfLines={4} width="100%" />
              </HStack>
              <Skeleton height="200px" mb={4} />
              <SkeletonText noOfLines={2} width="70%" />

            </Box>
          ))
          : // Jika tidak loading, tampilkan data asli
          products.map((item) => (
            <Box
              key={item.id}
              p={4}
              borderWidth="1px"
              borderColor="teal.600"
              boxShadow="md"
              borderRadius="xl"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.03)",
                transition: "0.3s",
              }}
              height="100%"
              display="flex"
              flexDirection="column"
            >
      <Text color="gray.500" fontSize="xl" fontWeight="bold">
        {item.title}
      </Text>

      <Text
        mt={2}
        fontSize="sm"
        color="gray.500"
        textAlign="initial"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {
          item.content
            .replace(/<a[^>]*>.*?<\/a>/g, '')
            .replace(/<[^>]*>?/gm, '')
            .replace(/&[^;\s]+;/g, '')
            .slice(0, 500)
        }...
      </Text>

      {item.images?.length > 0 && (
        <Image
          src={item.images[0].url}
          alt={item.title}
          boxSize="auto"
          mx="auto"
          my={4}
        />
      )}

      {/* Spacer agar tombol terdorong ke bawah */}
      <Box flex="1" />

      {item.hasLink && (
        <Button
          as="a"
          href={item.link}
          target="_blank"
          borderColor="teal.600"
          color="teal.600"
          size="sm"
          variant="outline"
          width="full"
          mt={4}
        >
          Visit Link
        </Button>
      )}
    </Box>
  ))}
</SimpleGrid>

    </DashboardLayout>
  );
}
