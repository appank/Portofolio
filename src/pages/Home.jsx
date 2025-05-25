import { Box, Heading, Text } from '@chakra-ui/react';
import DashboardLayout from "../components/DashboardLayout";
import 'animate.css';

export default function Home() {
  return (
    <DashboardLayout>
      <Box
        data-state="open"
        _open={{
          animationName: "fade-in, scale-in",
          animationDuration: "300ms",
        }}
        _closed={{
          animationName: "fade-out, scale-out",
          animationDuration: "120ms",
        }}
      >
        <Heading className="animate__animated animate__fadeIn" fontSize="4xl" mb={2}>Hi!</Heading>
        <Heading className="animate__animated animate__fadeIn" fontSize="5xl" fontWeight="bold" mb={4}>
        i'm <Text as="span" bgGradient="linear(to-r, cyan.400, teal.500)" bgClip="text">BASO ARFAN EFENDY</Text>
      </Heading>
        <Text fontSize="lg" lineHeight="tall" className="animate__animated animate__fadeIn">
          a Junior Full Stack Developer continuously improving my skills and expanding my experience in web development.
      </Text>
      </Box>
    </DashboardLayout>
  );
}
