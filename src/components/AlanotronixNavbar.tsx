import {
    Box,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useColorModeValue,
    VStack,
    Text,
    Divider,
    Avatar
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FiShoppingCart, FiHeart, FiUser, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { categories } from '../data/categories';

interface AlanotronixNavbarProps {
    onSearch: (searchText: string) => void;
    cartItemsCount?: number;
    wishlistCount?: number;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const AlanotronixNavbar = ({ 
    onSearch, 
    cartItemsCount = 0, 
    wishlistCount = 0 
}: AlanotronixNavbarProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const bgColor = useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(0, 0, 0, 0.95)');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchValue);
    };

    const featuredCategories = categories.filter(cat => cat.featured);

    return (
        <MotionBox
            as="nav"
            position="sticky"
            top={0}
            zIndex={1000}
            bg={bgColor}
            backdropFilter="blur(20px)"
            borderBottom={`1px solid`}
            borderColor={borderColor}
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Main Navigation Bar */}
            <Flex
                maxW="1400px"
                mx="auto"
                px={6}
                py={4}
                align="center"
                justify="space-between"
            >
                {/* Logo */}
                <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Text
                        fontSize="2xl"
                        fontWeight="900"
                        bgGradient="linear(to-r, brand.400, accent.400)"
                        bgClip="text"
                        cursor="pointer"
                        letterSpacing="tight"
                    >
                        Alanotronix
                    </Text>
                </MotionBox>

                {/* Category Navigation - Desktop */}
                <HStack spacing={1} display={{ base: 'none', lg: 'flex' }}>
                    <Button
                        variant="ghost"
                        leftIcon={<HamburgerIcon />}
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                        position="relative"
                        color="gray.300"
                        _hover={{ color: 'brand.400', bg: 'whiteAlpha.100' }}
                    >
                        Kategorien
                    </Button>
                    
                    {featuredCategories.slice(0, 5).map((category) => (
                        <Button
                            key={category.id}
                            variant="ghost"
                            size="sm"
                            color="gray.300"
                            _hover={{ color: 'brand.400', bg: 'whiteAlpha.100' }}
                            transition="all 0.2s"
                        >
                            {category.icon} {category.name}
                        </Button>
                    ))}
                </HStack>

                {/* Search Bar */}
                <Box flex={1} maxW="500px" mx={6}>
                    <form onSubmit={handleSearch}>
                        <InputGroup size="lg">
                            <InputLeftElement>
                                <SearchIcon color="gray.400" />
                            </InputLeftElement>
                            <Input
                                placeholder="Suche nach Produkten, Marken, Kategorien..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                bg="whiteAlpha.100"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                _focus={{
                                    borderColor: 'brand.400',
                                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                                    bg: 'whiteAlpha.200'
                                }}
                                _placeholder={{ color: 'gray.400' }}
                                borderRadius="50px"
                                transition="all 0.3s"
                            />
                        </InputGroup>
                    </form>
                </Box>

                {/* User Actions */}
                <HStack spacing={3}>
                    {/* Notifications */}
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<BellIcon />}
                            variant="ghost"
                            size="lg"
                            color="gray.300"
                            _hover={{ color: 'brand.400', bg: 'whiteAlpha.100' }}
                            position="relative"
                        >
                            <Badge
                                position="absolute"
                                top="8px"
                                right="8px"
                                colorScheme="red"
                                fontSize="xs"
                                borderRadius="full"
                                minW="18px"
                                h="18px"
                            >
                                3
                            </Badge>
                        </MenuButton>
                        <MenuList bg="gray.800" borderColor="gray.700">
                            <MenuItem bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                🎉 Willkommen bei Alanotronix!
                            </MenuItem>
                            <MenuItem bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                📦 Deine Bestellung ist unterwegs
                            </MenuItem>
                            <MenuItem bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                💎 Exklusive Angebote verfügbar
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {/* Wishlist */}
                    <MotionBox position="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton
                            icon={<FiHeart />}
                            variant="ghost"
                            size="lg"
                            color="gray.300"
                            _hover={{ color: 'accent.400', bg: 'whiteAlpha.100' }}
                            aria-label="Wishlist"
                        />
                        {wishlistCount > 0 && (
                            <Badge
                                position="absolute"
                                top="8px"
                                right="8px"
                                colorScheme="orange"
                                fontSize="xs"
                                borderRadius="full"
                                minW="18px"
                                h="18px"
                            >
                                {wishlistCount}
                            </Badge>
                        )}
                    </MotionBox>

                    {/* Shopping Cart */}
                    <MotionBox position="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton
                            icon={<FiShoppingCart />}
                            variant="ghost"
                            size="lg"
                            color="gray.300"
                            _hover={{ color: 'brand.400', bg: 'whiteAlpha.100' }}
                            aria-label="Warenkorb"
                        />
                        {cartItemsCount > 0 && (
                            <Badge
                                position="absolute"
                                top="8px"
                                right="8px"
                                colorScheme="blue"
                                fontSize="xs"
                                borderRadius="full"
                                minW="18px"
                                h="18px"
                            >
                                {cartItemsCount}
                            </Badge>
                        )}
                    </MotionBox>

                    {/* User Menu */}
                    <Menu>
                        <MenuButton>
                            <Avatar size="sm" bg="brand.500" color="white" name="User" />
                        </MenuButton>
                        <MenuList bg="gray.800" borderColor="gray.700">
                            <MenuItem icon={<FiUser />} bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                Mein Profil
                            </MenuItem>
                            <MenuItem icon={<FiShoppingCart />} bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                Meine Bestellungen
                            </MenuItem>
                            <MenuItem icon={<FiHeart />} bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                Wunschliste
                            </MenuItem>
                            <Divider borderColor="gray.700" />
                            <MenuItem icon={<FiLogOut />} bg="gray.800" _hover={{ bg: 'gray.700' }}>
                                Abmelden
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Flex>

            {/* Mega Menu */}
            <AnimatePresence>
                {isMegaMenuOpen && (
                    <MotionFlex
                        position="absolute"
                        top="100%"
                        left={0}
                        right={0}
                        bg="gray.900"
                        borderTop="1px solid"
                        borderColor="gray.700"
                        boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        maxW="1400px"
                        mx="auto"
                        p={8}
                        gap={8}
                    >
                        {/* Categories Grid */}
                        <VStack align="start" flex={3}>
                            <Text fontSize="lg" fontWeight="600" color="brand.400" mb={4}>
                                Alle Kategorien
                            </Text>
                            <Flex wrap="wrap" gap={4}>
                                {categories.map((category) => (
                                    <MotionBox
                                        key={category.id}
                                        p={3}
                                        borderRadius="lg"
                                        bg="whiteAlpha.50"
                                        cursor="pointer"
                                        minW="200px"
                                        whileHover={{ 
                                            scale: 1.02, 
                                            backgroundColor: "rgba(255, 255, 255, 0.1)" 
                                        }}
                                    >
                                        <HStack>
                                            <Text fontSize="2xl">{category.icon}</Text>
                                            <VStack align="start" spacing={0}>
                                                <Text fontWeight="500" color="white">
                                                    {category.name}
                                                </Text>
                                                <Text fontSize="sm" color="gray.400">
                                                    {category.description}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </MotionBox>
                                ))}
                            </Flex>
                        </VStack>

                        {/* Featured Section */}
                        <VStack align="start" flex={1}>
                            <Text fontSize="lg" fontWeight="600" color="accent.400" mb={4}>
                                Trending
                            </Text>
                            <VStack align="start" spacing={3}>
                                <Box>
                                    <Text fontWeight="500" color="white">🔥 Flash Deals</Text>
                                    <Text fontSize="sm" color="gray.400">Bis zu 70% Rabatt</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="500" color="white">⭐ Top Bewertungen</Text>
                                    <Text fontSize="sm" color="gray.400">Kundenlieblinge</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="500" color="white">🚚 Express Versand</Text>
                                    <Text fontSize="sm" color="gray.400">Noch heute bestellen</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="500" color="white">🌱 Nachhaltig</Text>
                                    <Text fontSize="sm" color="gray.400">Umweltfreundlich</Text>
                                </Box>
                            </VStack>
                        </VStack>
                    </MotionFlex>
                )}
            </AnimatePresence>
        </MotionBox>
    );
};