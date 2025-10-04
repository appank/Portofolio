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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
export default function Projects() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Fungsi untuk membuka modal dengan data project
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

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
              {/* Gambar di bagian atas */}
      {item.images?.length > 0 && (
        <Image
          src={item.images[0].url}
          alt={item.title}
          boxSize="auto"
                  borderRadius="lg"
          mx="auto"
                  mb={3}
                  width="100%"
                  height="200px"
                  objectFit="cover"
        />
      )}

              {/* Judul di bawah gambar */}
              <Text color="gray.500" fontSize="xl" fontWeight="bold" textAlign="center">
                {item.title}
              </Text>

      {/* Spacer agar tombol terdorong ke bawah */}
      <Box flex="1" />

              <Button
                onClick={() => handleOpenModal(item)}
                borderColor="teal.600"
                color="teal.600"
                size="sm"
                variant="outline"
                width="full"
                mt={4}
              >
                Visit Link
              </Button>
    </Box>
  ))}
</SimpleGrid>

      {/* Modal Dialog untuk menampilkan detail project */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent bg="gray.800" color="white" borderRadius="xl" mx={4}>
          <ModalHeader fontSize="2xl" fontWeight="bold">
            {selectedProject?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedProject?.images?.length > 0 && (
              <Image
                src={selectedProject.images[0].url}
                alt={selectedProject.title}
                borderRadius="lg"
                mb={4}
                width="100%"
                objectFit="cover"
              />
            )}
            <Text fontSize="md" color="gray.300" mb={4}>
              {selectedProject?.content
                .replace(/<a[^>]*>.*?<\/a>/g, '')
                .replace(/<[^>]*>?/gm, '')
                .replace(/&[^;\s]+;/g, '')}
            </Text>
            <Box
              p={3}
              bg="gray.700"
              borderRadius="md"
              wordBreak="break-all"
            >
              <Text fontSize="sm" color="teal.300" fontWeight="bold" mb={1}>
                URL:
              </Text>
              {selectedProject?.hasLink && selectedProject?.link ? (
                <Link
                  href={selectedProject.link}
                  isExternal
                  color="cyan.400"
                  fontSize="sm"
                  textDecoration="underline"
                >
                  {selectedProject.link} <ExternalLinkIcon mx="2px" />
                </Link>
              ) : (
                <Text fontSize="sm" color="gray.400" fontStyle="italic">
                  URL tidak tersedia untuk project ini
                </Text>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            {selectedProject?.hasLink && selectedProject?.link ? (
              <Button
                as="a"
                href={selectedProject.link}
                target="_blank"
                colorScheme="teal"
                mr={3}
                rightIcon={<ExternalLinkIcon />}
              >
                Buka Link
              </Button>
            ) : (
              <Button
                colorScheme="teal"
                mr={3}
                isDisabled
                opacity={0.5}
              >
                Link Tidak Tersedia
              </Button>
            )}
            <Button variant="ghost" onClick={onClose} color="gray.300">
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </DashboardLayout>
  );
}
