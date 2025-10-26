import {
    Box,
    Flex,
    Text,
    Button,
    HStack,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FiPlay, FiShoppingCart, FiHeart } from 'react-icons/fi';

const MotionBox = motion(Box);

interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    secondaryCtaText?: string;
    backgroundImage: string;
    category: string;
    discount?: string;
    isVideo?: boolean;
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: 'Willkommen bei Alanotronix',
        subtitle: 'Dein Premium Lifestyle Shop',
        description: 'Entdecke eine Welt voller Möglichkeiten. Von Elektronik bis Mode, von Zuhause bis Sport - alles was du brauchst, in einem Shop.',
        ctaText: 'Jetzt entdecken',
        secondaryCtaText: 'Kategorien durchstöbern',
        backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        category: 'Featured',
        isVideo: false
    },
    {
        id: 2,
        title: 'Tech Revolution 2024',
        subtitle: 'Die neuesten Innovationen',
        description: 'Erlebe die Zukunft heute. Cutting-edge Technologie, die dein Leben verändert. Smartphones, Laptops, Smart Home und mehr.',
        ctaText: 'Tech entdecken',
        secondaryCtaText: 'Deals ansehen',
        backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
        category: 'Elektronik',
        discount: 'Bis zu 40% sparen',
        isVideo: false
    },
    {
        id: 3,
        title: 'Fashion Forward',
        subtitle: 'Style ohne Kompromisse',
        description: 'Setze Trends, folge nicht nur. Exklusive Mode-Kollektionen für jeden Anlass. Von Streetwear bis Business - finde deinen Style.',
        ctaText: 'Style shoppen',
        secondaryCtaText: 'Lookbook ansehen',
        backgroundImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
        category: 'Mode',
        discount: 'Neue Kollektion',
        isVideo: false
    },
    {
        id: 4,
        title: 'Smart Home Evolution',
        subtitle: 'Zuhause neu definiert',
        description: 'Verwandle dein Zuhause in eine intelligente Oase. IoT-Geräte, Design-Möbel und nachhaltige Lösungen für modernes Wohnen.',
        ctaText: 'Smart leben',
        secondaryCtaText: 'Home Tour starten',
        backgroundImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
        category: 'Smart Home',
        discount: 'Starter Sets verfügbar',
        isVideo: true
    }
];

export const AlanotronixHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    const slideHeight = useBreakpointValue({ base: '500px', md: '600px', lg: '700px' });
    
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <Box position="relative" height={slideHeight} overflow="hidden">
            <AnimatePresence mode="wait">
                <MotionBox
                    key={currentSlide}
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Background Image */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundImage={`url(${heroSlides[currentSlide].backgroundImage})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        filter="brightness(0.4)"
                    />
                    
                    {/* Gradient Overlay */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgGradient="linear(to-r, rgba(0,0,0,0.8), rgba(0,0,0,0.4))"
                    />

                    {/* Content */}
                    <Container maxW="1400px" height="full" position="relative" zIndex={2}>
                        <Flex align="center" height="full">
                            <MotionBox
                                maxW="600px"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Category Badge */}
                                <MotionBox
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <HStack spacing={2} mb={4}>
                                        <Box
                                            px={3}
                                            py={1}
                                            bg="brand.500"
                                            borderRadius="full"
                                            fontSize="sm"
                                            fontWeight="600"
                                        >
                                            {heroSlides[currentSlide].category}
                                        </Box>
                                        {heroSlides[currentSlide].discount && (
                                            <Box
                                                px={3}
                                                py={1}
                                                bg="accent.500"
                                                borderRadius="full"
                                                fontSize="sm"
                                                fontWeight="600"
                                            >
                                                {heroSlides[currentSlide].discount}
                                            </Box>
                                        )}
                                    </HStack>
                                </MotionBox>

                                {/* Title */}
                                <MotionBox
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <Text
                                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                                        fontWeight="900"
                                        lineHeight="shorter"
                                        mb={2}
                                        bgGradient="linear(to-r, white, gray.200)"
                                        bgClip="text"
                                    >
                                        {heroSlides[currentSlide].title}
                                    </Text>
                                </MotionBox>

                                {/* Subtitle */}
                                <MotionBox
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <Text
                                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                        fontWeight="600"
                                        color="brand.300"
                                        mb={4}
                                    >
                                        {heroSlides[currentSlide].subtitle}
                                    </Text>
                                </MotionBox>

                                {/* Description */}
                                <MotionBox
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <Text
                                        fontSize={{ base: 'md', md: 'lg' }}
                                        color="gray.300"
                                        mb={8}
                                        maxW="500px"
                                        lineHeight="tall"
                                    >
                                        {heroSlides[currentSlide].description}
                                    </Text>
                                </MotionBox>

                                {/* CTA Buttons */}
                                <MotionBox
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <HStack spacing={4} flexWrap="wrap">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            leftIcon={heroSlides[currentSlide].isVideo ? <FiPlay /> : <FiShoppingCart />}
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 15px 30px rgba(0, 136, 255, 0.4)'
                                            }}
                                        >
                                            {heroSlides[currentSlide].ctaText}
                                        </Button>
                                        
                                        {heroSlides[currentSlide].secondaryCtaText && (
                                            <Button
                                                variant="glass"
                                                size="lg"
                                                leftIcon={<FiHeart />}
                                            >
                                                {heroSlides[currentSlide].secondaryCtaText}
                                            </Button>
                                        )}
                                    </HStack>
                                </MotionBox>
                            </MotionBox>
                        </Flex>
                    </Container>
                </MotionBox>
            </AnimatePresence>

            {/* Navigation Controls */}
            <HStack
                position="absolute"
                bottom={8}
                left="50%"
                transform="translateX(-50%)"
                spacing={2}
                zIndex={3}
            >
                {heroSlides.map((_, index) => (
                    <MotionBox
                        key={index}
                        w={currentSlide === index ? "40px" : "12px"}
                        h="4px"
                        bg={currentSlide === index ? "brand.400" : "whiteAlpha.400"}
                        borderRadius="full"
                        cursor="pointer"
                        onClick={() => goToSlide(index)}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </HStack>

            {/* Arrow Controls */}
            <Box
                position="absolute"
                left={4}
                top="50%"
                transform="translateY(-50%)"
                zIndex={3}
                display={{ base: 'none', md: 'block' }}
            >
                <MotionBox
                    as={Button}
                    variant="glass"
                    size="lg"
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeftIcon fontSize="24px" />
                </MotionBox>
            </Box>

            <Box
                position="absolute"
                right={4}
                top="50%"
                transform="translateY(-50%)"
                zIndex={3}
                display={{ base: 'none', md: 'block' }}
            >
                <MotionBox
                    as={Button}
                    variant="glass"
                    size="lg"
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRightIcon fontSize="24px" />
                </MotionBox>
            </Box>

            {/* Auto-play Indicator */}
            {isAutoPlaying && (
                <Box
                    position="absolute"
                    top={4}
                    right={4}
                    zIndex={3}
                    bg="whiteAlpha.200"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    color="white"
                    backdropFilter="blur(10px)"
                >
                    Auto-Play aktiv
                </Box>
            )}
        </Box>
    );
};