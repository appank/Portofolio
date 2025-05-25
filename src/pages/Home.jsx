import { Box, Heading, Text } from '@chakra-ui/react';
import DashboardLayout from "../components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <Heading fontSize="4xl" mb={2}>Hi!</Heading>
      <Heading fontSize="5xl" fontWeight="bold" mb={4}>
        i'm <Text as="span" bgGradient="linear(to-r, cyan.400, teal.500)" bgClip="text">BASO ARFAN EFENDY</Text>
      </Heading>
      <Text fontSize="lg" lineHeight="tall">
        I am a software developer working as a freelancer, handling various software development projects based on client needs.
        I have experience in designing, developing, and implementing efficient and innovative software solutions.
        With expertise in various technologies and programming languages, I focus on building high-quality applications that meet industry standards.
      </Text>
    </DashboardLayout>
  );
}
