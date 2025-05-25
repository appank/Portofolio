import {
  Box, Flex, Text, useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  const bgColor = useColorModeValue("#0E1111", "white");
  const textColor = useColorModeValue("#white", "#0E1111");
  return (
    <Flex direction="column" minH="100vh" bg={bgColor} color="white">
      {/* Topbar */}
      <Topbar />
      <a
        href="https://wa.me/6285757404277?text=Hallo,%20Saya%20ingin%20menghubungi%20Anda."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",       // buat lingkaran
          height: "50px",      // buat lingkaran
          borderRadius: "50%", // bulat sempurna
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          display: "flex",            // untuk center ikon
          alignItems: "center",       // untuk center ikon
          justifyContent: "center",   // untuk center ikon
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <i className="ci ci-whatsapp ci-2x"></i>
      </a>
      <Box
        flex="1"
        px={{ base: 6, md: 10 }}
        py={{ base: 1, md: 5 }}
        maxW="800px"
        mx="auto"
        textColor={textColor}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box textAlign="center" py={6}>
        <Text fontSize="sm" color={textColor}>
          © 2025 By{" "}
          <Text as="span" fontWeight="bold" textDecoration="underline" color={textColor}>
            AppankDev
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
