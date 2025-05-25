import { Box, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import DashboardLayout from "../components/DashboardLayout";

export default function About() {
  return (
    <DashboardLayout>
      <Heading fontSize="5xl" fontWeight="bold" mb={4}>
        " <Text as="span" bgGradient="linear(to-r, cyan.400, teal.500)" bgClip="text">About Me</Text>
      </Heading>
      <Text fontSize="lg" lineHeight="tall">
        I am a software developer working as a freelancer, handling various software development projects based on client needs.
        I have experience in designing, developing, and implementing efficient and innovative software solutions.
        With expertise in various technologies and programming languages, I focus on building high-quality applications that meet industry standards.
      </Text>
      <Heading fontSize="2xl" fontWeight="bold" mt={8} mb={4}>
        " <Text as="span" bgGradient="linear(to-r, cyan.400, teal.500)" bgClip="text">Tech Stack</Text>
      </Heading>
      <SimpleGrid columns={{ base: 5, md: 9 }} spacing={4} 
      maxW="800px"
      mx="auto"
      >
    {/* Item 1 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/react/react.svg" alt="React" boxSize="40px" mx="auto" />
      
    </Box>

    {/* Item 2 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/javascript/javascript.svg" alt="JavaScript" boxSize="40px" mx="auto" />
      
    </Box>

    {/* Item 4 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/firebase/firebase.svg" alt="Firebase" boxSize="40px" mx="auto" />
      
    </Box>


     {/* Item 6 */}
     <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/dart/dart.svg" alt="Dart" boxSize="40px" mx="auto" />
      
    </Box>
     {/* Item 6 */}
     <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/flutter/flutter.svg" alt="Flutter" boxSize="40px" mx="auto" />
      
    </Box>
    {/* Item 7 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/ef59ea8e2bba5848a8f471f94b24f55289c86476/public/logos/technology/mysql/mysql-vertical.svg" alt="Mysql" boxSize="40px" mx="auto" />
      
    </Box>
    {/* Item 8 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/bc82276a7ea47630ae52edd6137e58da18cfedce/public/logos/technology/supabase/supabase.svg" alt="Supabase" boxSize="40px" mx="auto" />
    </Box>
    {/* Item 9 */}
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/3a0c2f14d5a956433d3a8f129507cd98f816e241/public/logos/technology/chakraui/chakraui.svg" alt="Chakra UI" boxSize="40px" mx="auto" />
    </Box>
    <Box textAlign="center">
      <Image src="https://raw.githubusercontent.com/dheereshagrwal/coloured-icons/3a0c2f14d5a956433d3a8f129507cd98f816e241/public/logos/technology/laravel/laravel.svg" alt="Laravel" boxSize="40px" mx="auto" />
    </Box>

  </SimpleGrid>
    </DashboardLayout>
  );
}
