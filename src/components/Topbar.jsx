import {
  Flex,
  Button,
  Text,
  Stack,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Topbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure(); // ⬅️ untuk buka/tutup drawer

  const navLinks = (direction = "column") => (
    <Stack direction={direction} spacing={6}>
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#319795" }}
        onClick={onClose}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#319795" }}
        onClick={onClose}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="services"
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#319795" }}
        onClick={onClose}
      >
        Services
      </ScrollLink>
      <ScrollLink
        to="portfolio"
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#319795" }}
        onClick={onClose}
      >
        Portfolio
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#319795" }}
        onClick={onClose}
      >
        Contact
      </ScrollLink>
    </Stack>
  );

  return (
    <>
      <Flex
        as="header"
        justify="space-between"
        align="center"
        py={4}
        px={6}
        bg="white"
        boxShadow="sm"
        position="sticky"
        top={0}
        zIndex={10}
      >
        {/* Brand */}
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          Appank<span style={{ color: 'gray' }}>Dev</span>
        </Text>

        {/* Navigation */}
        {isMobile ? (
          <Button colorScheme="teal" variant="outline" size="sm" onClick={onOpen}>
            Menu
          </Button>
        ) : (
          navLinks("row")  // ⬅️ Di PC arah row
        )}
      </Flex>

      {/* Drawer untuk mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {navLinks("column")} {/* ⬅️ Di mobile arah column */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Topbar;
