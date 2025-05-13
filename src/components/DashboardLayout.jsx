
import { Stack, Badge, Box, Flex } from "@chakra-ui/react";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" bg="gray.50">

      {/* Badge Section */}
      <Stack direction="row" spacing={2} p={4}>
        <Badge>Disciplined</Badge>
        <Badge colorScheme="green">Consitent</Badge>
    <Badge colorScheme="red">Error</Badge>
    <Badge colorScheme="purple">Repeat</Badge>
      </Stack>
      {/* Topbar */}
      <Topbar />

      

      {/* Konten halaman */}
      <Box flex="1" px={{ base: 4, md: 8 }} py={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
