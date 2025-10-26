import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUser, FaBell } from "react-icons/fa";

const Links = [
  "Katalog",
  "Kategorien",
  "Laborausrüstung",
  "Über uns",
  "Kontakt",
];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    color="white"
    fontWeight="500"
    fontSize="sm"
    transition="all 0.2s"
    _hover={{
      textDecoration: "none",
      color: "gray.300",
    }}
  >
    {children}
  </Link>
);

const NetflixNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#000000" px={4} position="fixed" top="0" w="100%" zIndex="1000">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="#E50914"
              letterSpacing="tight"
            >
              ChemSpace
            </Text>
          </Box>

          {/* Desktop Navigation */}
          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            <HStack as="nav" spacing={6}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          {/* Search and User Controls */}
          <HStack spacing={4}>
            {/* Search */}
            <InputGroup maxW="250px" display={{ base: "none", md: "block" }}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Produkte suchen..."
                variant="netflix"
                size="sm"
                bg="#2A2A2A"
                border="1px solid #515151"
                _placeholder={{ color: "gray.400" }}
              />
            </InputGroup>

            {/* Mobile Search Icon */}
            <IconButton
              size="sm"
              icon={<SearchIcon />}
              aria-label="Search"
              variant="ghost"
              color="white"
              display={{ base: "flex", md: "none" }}
            />

            {/* Notifications */}
            <IconButton
              size="sm"
              icon={<FaBell />}
              aria-label="Notifications"
              variant="ghost"
              color="white"
              display={{ base: "none", md: "flex" }}
            />

            {/* User Profile */}
            <IconButton
              size="sm"
              icon={<FaUser />}
              aria-label="User Profile"
              variant="ghost"
              color="white"
            />

            {/* Mobile Menu Button */}
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="white"
            />
          </HStack>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              {/* Mobile Search */}
              <InputGroup mt={4}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Produkte suchen..."
                  variant="netflix"
                  size="sm"
                />
              </InputGroup>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default NetflixNavbar;
