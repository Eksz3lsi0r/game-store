import {
    Box,
    Card,
    CardBody,
    Text,
    Badge,
    HStack,
    VStack,
    Button,
    IconButton,
    Image,
    AspectRatio,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Divider,
    Grid,
    GridItem
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiEye, FiStar, FiCheck, FiTruck } from 'react-icons/fi';
import { Product } from '../models/Product';

const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    onAddToWishlist?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
}

export const ProductCard = ({ 
    product, 
    onAddToCart, 
    onAddToWishlist, 
    onQuickView 
}: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const discountPercent = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const handleAddToWishlist = () => {
        setIsWishlisted(!isWishlisted);
        onAddToWishlist?.(product);
    };

    const handleQuickView = () => {
        onOpen();
        onQuickView?.(product);
    };

    return (
        <>
            <MotionCard
                position="relative"
                overflow="hidden"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="16px"
                cursor="pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                layout
            >
                {/* Product Image */}
                <Box position="relative" overflow="hidden">
                    <AspectRatio ratio={4/3}>
                        <Image
                            src={product.images[currentImageIndex] || 'https://via.placeholder.com/400x300/2D3748/CBD5E0?text=Product'}
                            alt={product.name}
                            objectFit="cover"
                            transition="transform 0.3s ease"
                            transform={isHovered ? "scale(1.05)" : "scale(1)"}
                            fallbackSrc="https://via.placeholder.com/400x300/2D3748/CBD5E0?text=Product"
                        />
                    </AspectRatio>

                    {/* Badges */}
                    <Box position="absolute" top={3} left={3}>
                        <VStack align="start" spacing={2}>
                            {product.isNew && (
                                <Badge colorScheme="green" variant="solid" fontSize="xs">
                                    NEU
                                </Badge>
                            )}
                            {product.isBestseller && (
                                <Badge colorScheme="orange" variant="solid" fontSize="xs">
                                    BESTSELLER
                                </Badge>
                            )}
                            {discountPercent > 0 && (
                                <Badge colorScheme="red" variant="solid" fontSize="xs">
                                    -{discountPercent}%
                                </Badge>
                            )}
                        </VStack>
                    </Box>

                    {/* Quick Actions */}
                    <AnimatePresence>
                        {isHovered && (
                            <MotionBox
                                position="absolute"
                                top={3}
                                right={3}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <VStack spacing={2}>
                                    <IconButton
                                        aria-label="Add to wishlist"
                                        icon={<FiHeart />}
                                        size="sm"
                                        variant="ghost"
                                        bg="whiteAlpha.200"
                                        color={isWishlisted ? "red.400" : "white"}
                                        _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                                        onClick={handleAddToWishlist}
                                    />
                                    <IconButton
                                        aria-label="Quick view"
                                        icon={<FiEye />}
                                        size="sm"
                                        variant="ghost"
                                        bg="whiteAlpha.200"
                                        color="white"
                                        _hover={{ bg: "whiteAlpha.300", transform: "scale(1.1)" }}
                                        onClick={handleQuickView}
                                    />
                                </VStack>
                            </MotionBox>
                        )}
                    </AnimatePresence>

                    {/* Stock Status */}
                    {!product.inStock && (
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bg="blackAlpha.600"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text color="white" fontWeight="600" fontSize="lg">
                                Ausverkauft
                            </Text>
                        </Box>
                    )}

                    {/* Image Navigation */}
                    {product.images.length > 1 && (
                        <HStack
                            position="absolute"
                            bottom={3}
                            left="50%"
                            transform="translateX(-50%)"
                            spacing={1}
                        >
                            {product.images.map((_, index) => (
                                <Box
                                    key={index}
                                    w="6px"
                                    h="6px"
                                    borderRadius="full"
                                    bg={index === currentImageIndex ? "white" : "whiteAlpha.400"}
                                    cursor="pointer"
                                    onClick={() => setCurrentImageIndex(index)}
                                    transition="all 0.2s"
                                />
                            ))}
                        </HStack>
                    )}
                </Box>

                <CardBody p={4}>
                    {/* Brand */}
                    <Text fontSize="sm" color="gray.400" mb={1}>
                        {product.brand.name}
                    </Text>

                    {/* Product Name */}
                    <Text
                        fontSize="lg"
                        fontWeight="600"
                        noOfLines={2}
                        mb={2}
                        minH="50px"
                        color="white"
                    >
                        {product.name}
                    </Text>

                    {/* Rating */}
                    <HStack spacing={1} mb={3}>
                        <HStack spacing={0}>
                            {[...Array(5)].map((_, i) => (
                                <FiStar
                                    key={i}
                                    size="14px"
                                    color={i < Math.floor(product.rating) ? "#F6AD55" : "#4A5568"}
                                    fill={i < Math.floor(product.rating) ? "#F6AD55" : "transparent"}
                                />
                            ))}
                        </HStack>
                        <Text fontSize="sm" color="gray.400">
                            ({product.reviewCount})
                        </Text>
                    </HStack>

                    {/* Price */}
                    <HStack align="baseline" mb={4}>
                        <Text fontSize="xl" fontWeight="700" color="brand.400">
                            €{product.price.toFixed(2)}
                        </Text>
                        {product.originalPrice && (
                            <Text
                                fontSize="md"
                                color="gray.500"
                                textDecoration="line-through"
                            >
                                €{product.originalPrice.toFixed(2)}
                            </Text>
                        )}
                    </HStack>

                    {/* Shipping Info */}
                    {product.shippingInfo.freeShipping && (
                        <HStack spacing={1} mb={3}>
                            <FiTruck size="14px" color="#48BB78" />
                            <Text fontSize="sm" color="green.400">
                                Kostenloser Versand
                            </Text>
                        </HStack>
                    )}

                    {/* Add to Cart Button */}
                    <AnimatePresence>
                        <MotionButton
                            variant="primary"
                            width="full"
                            leftIcon={<FiShoppingCart />}
                            isDisabled={!product.inStock}
                            onClick={() => onAddToCart?.(product)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {product.inStock ? 'In den Warenkorb' : 'Ausverkauft'}
                        </MotionButton>
                    </AnimatePresence>
                </CardBody>
            </MotionCard>

            {/* Quick View Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent bg="gray.800" color="white">
                    <ModalHeader>{product.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                            <GridItem>
                                <AspectRatio ratio={1}>
                                    <Image
                                        src={product.images[0] || 'https://via.placeholder.com/400x400/2D3748/CBD5E0?text=Product'}
                                        alt={product.name}
                                        borderRadius="lg"
                                        objectFit="cover"
                                    />
                                </AspectRatio>
                            </GridItem>
                            <GridItem>
                                <VStack align="start" spacing={4}>
                                    <Text fontSize="sm" color="gray.400">
                                        {product.brand.name} • {product.category.name}
                                    </Text>
                                    
                                    <Text fontSize="lg">
                                        {product.description}
                                    </Text>

                                    <HStack>
                                        <Text fontSize="2xl" fontWeight="700" color="brand.400">
                                            €{product.price.toFixed(2)}
                                        </Text>
                                        {product.originalPrice && (
                                            <Text
                                                fontSize="lg"
                                                color="gray.500"
                                                textDecoration="line-through"
                                            >
                                                €{product.originalPrice.toFixed(2)}
                                            </Text>
                                        )}
                                    </HStack>

                                    <HStack spacing={1}>
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                size="16px"
                                                color={i < Math.floor(product.rating) ? "#F6AD55" : "#4A5568"}
                                                fill={i < Math.floor(product.rating) ? "#F6AD55" : "transparent"}
                                            />
                                        ))}
                                        <Text fontSize="sm" color="gray.400" ml={2}>
                                            {product.rating} ({product.reviewCount} Bewertungen)
                                        </Text>
                                    </HStack>

                                    <Divider borderColor="gray.600" />

                                    <VStack align="start" spacing={2}>
                                        <HStack>
                                            <FiCheck color="#48BB78" />
                                            <Text fontSize="sm">
                                                {product.inStock ? `${product.stockCount} auf Lager` : 'Ausverkauft'}
                                            </Text>
                                        </HStack>
                                        {product.shippingInfo.freeShipping && (
                                            <HStack>
                                                <FiTruck color="#48BB78" />
                                                <Text fontSize="sm">Kostenloser Versand</Text>
                                            </HStack>
                                        )}
                                    </VStack>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        width="full"
                                        leftIcon={<FiShoppingCart />}
                                        isDisabled={!product.inStock}
                                        onClick={() => {
                                            onAddToCart?.(product);
                                            onClose();
                                        }}
                                    >
                                        {product.inStock ? 'In den Warenkorb' : 'Ausverkauft'}
                                    </Button>
                                </VStack>
                            </GridItem>
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};