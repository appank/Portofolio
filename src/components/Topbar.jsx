import {
  Flex, 
  Heading,
  Link,
  IconButton,
  Spacer,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#0E1111", "white");
  const textColor = useColorModeValue("#white", "#0E1111");
  const CustomIcon = ({ src, alt, ...props }) => (
    <img src={src} alt={alt} width="20px" height="20px" {...props} />
  );

  return (
    <Flex 
      p={4}
      align="center"
      flexDirection={{ base: 'column', md: 'row' }}
      px={{ base: 6, md: 10 }}
      py={{ base: 10, md: 20 }}
      textColor={textColor}
      maxW="800px"
      mx="auto">
      <Heading size="md" fontWeight="bold" mb={{ base: 4, md: 0 }}>
        Appank Dev
      </Heading>
      <Spacer />
      <Flex gap={6} pl={3} align="center">
        <ChakraLink as={RouterLink} to="/">
          Home
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/projects">
          Projects
        </ChakraLink>
        <ChakraLink as={RouterLink} to="/about">
          About
        </ChakraLink>
        <IconButton
          aria-label="Toggle dark mode"
          icon={
            <CustomIcon
              src={colorMode === 'light' ? sunIcon : moonIcon}
              alt={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
            />
          }
          onClick={toggleColorMode}
          variant="unstyled"

        />
      </Flex>
    </Flex>
  );
}
