import {
    Box,
    Grid,
    Text,
    VStack,
    HStack,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

const MotionBox = motion(Box);

interface CategoryCardProps {
    category: {
        id: number;
        name: string;
        icon: string;
        description?: string;
        featured: boolean;
    };
    delay: number;
}

const CategoryCard = ({ category, delay }: CategoryCardProps) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Box
                bg="gray.800"
                p={6}
                borderRadius="xl"
                cursor="pointer"
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.700"
                _hover={{
                    borderColor: 'brand.400',
                    boxShadow: '0 20px 40px rgba(0, 136, 255, 0.1)'
                }}
                transition="all 0.3s ease"
                h="full"
            >
                {/* Gradient Background Effect */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(135deg, brand.500, accent.500)"
                    opacity={0}
                    _groupHover={{ opacity: 0.05 }}
                    transition="opacity 0.3s"
                />

                <VStack spacing={4} align="center" position="relative" zIndex={1}>
                    {/* Icon */}
                    <Text fontSize="4xl" filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))">
                        {category.icon}
                    </Text>

                    {/* Category Name */}
                    <Text
                        fontSize="xl"
                        fontWeight="700"
                        textAlign="center"
                        color="white"
                        _groupHover={{ color: 'brand.300' }}
                        transition="color 0.3s"
                    >
                        {category.name}
                    </Text>

                    {/* Description */}
                    {category.description && (
                        <Text
                            fontSize="sm"
                            color="gray.400"
                            textAlign="center"
                            noOfLines={2}
                        >
                            {category.description}
                        </Text>
                    )}

                    {/* Featured Badge */}
                    {category.featured && (
                        <Box
                            position="absolute"
                            top={-2}
                            right={-2}
                            bg="accent.500"
                            color="white"
                            fontSize="xs"
                            fontWeight="600"
                            px={2}
                            py={1}
                            borderRadius="full"
                            transform="rotate(15deg)"
                        >
                            HOT
                        </Box>
                    )}
                </VStack>
            </Box>
        </MotionBox>
    );
};

export const FeaturedCategories = () => {
    const columns = useBreakpointValue({ base: 2, md: 3, lg: 4, xl: 4 });
    const featuredCategories = categories.filter(cat => cat.featured);

    return (
        <Container maxW="1400px" py={12}>
            <VStack spacing={8} align="stretch">
                {/* Section Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                >
                    <Text
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontWeight="900"
                        bgGradient="linear(to-r, brand.400, accent.400)"
                        bgClip="text"
                        mb={4}
                    >
                        Entdecke unsere Kategorien
                    </Text>
                    <Text
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="gray.300"
                        maxW="600px"
                        mx="auto"
                    >
                        Von Elektronik bis Mode - finde alles was du brauchst in unserem 
                        vielfältigen Sortiment
                    </Text>
                </MotionBox>

                {/* Categories Grid */}
                <Grid
                    templateColumns={`repeat(${columns}, 1fr)`}
                    gap={6}
                    role="group"
                >
                    {featuredCategories.map((category, index) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            delay={0.1 * index}
                        />
                    ))}
                </Grid>

                {/* All Categories Button */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    textAlign="center"
                    mt={8}
                >
                    <Box
                        as="button"
                        px={8}
                        py={4}
                        bg="whiteAlpha.100"
                        border="2px solid"
                        borderColor="brand.400"
                        borderRadius="full"
                        color="brand.400"
                        fontWeight="600"
                        fontSize="lg"
                        cursor="pointer"
                        _hover={{
                            bg: 'brand.400',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 25px rgba(0, 136, 255, 0.3)'
                        }}
                        transition="all 0.3s ease"
                    >
                        Alle Kategorien anzeigen →
                    </Box>
                </MotionBox>

                {/* Category Stats */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <HStack
                        justify="space-around"
                        bg="gray.800"
                        p={8}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.700"
                        flexWrap="wrap"
                        spacing={{ base: 4, md: 8 }}
                    >
                        <VStack spacing={1}>
                            <Text fontSize="2xl" fontWeight="700" color="brand.400">
                                8+
                            </Text>
                            <Text fontSize="sm" color="gray.400" textAlign="center">
                                Haupt-<br />kategorien
                            </Text>
                        </VStack>
                        <VStack spacing={1}>
                            <Text fontSize="2xl" fontWeight="700" color="accent.400">
                                50+
                            </Text>
                            <Text fontSize="sm" color="gray.400" textAlign="center">
                                Sub-<br />kategorien
                            </Text>
                        </VStack>
                        <VStack spacing={1}>
                            <Text fontSize="2xl" fontWeight="700" color="green.400">
                                10k+
                            </Text>
                            <Text fontSize="sm" color="gray.400" textAlign="center">
                                Produkte
                            </Text>
                        </VStack>
                        <VStack spacing={1}>
                            <Text fontSize="2xl" fontWeight="700" color="purple.400">
                                100+
                            </Text>
                            <Text fontSize="sm" color="gray.400" textAlign="center">
                                Top Marken
                            </Text>
                        </VStack>
                    </HStack>
                </MotionBox>
            </VStack>
        </Container>
    );
};