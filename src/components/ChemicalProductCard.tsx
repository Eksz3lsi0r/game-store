import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  Image,
  useColorModeValue,
  Tooltip,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import { FaFlask, FaCertificate, FaShieldAlt, FaStar } from 'react-icons/fa';
import { ChemicalProduct } from '../models/Chemical';

interface ChemicalProductCardProps {
  product: ChemicalProduct;
  onAddToCart?: (product: ChemicalProduct) => void;
  onViewDetails?: (product: ChemicalProduct) => void;
}

const AnimatedBox = animated(Box);

export const ChemicalProductCard: React.FC<ChemicalProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(255, 107, 157, 0.4), 0 0 30px rgba(76, 236, 196, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.3)',
    config: { tension: 300, friction: 10 },
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in_stock': return 'green.400';
      case 'low_stock': return 'orange.400';
      case 'out_of_stock': return 'red.400';
      case 'pre_order': return 'blue.400';
      default: return 'gray.400';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'in_stock': return 'Auf Lager';
      case 'low_stock': return 'Wenige verfügbar';
      case 'out_of_stock': return 'Ausverkauft';
      case 'pre_order': return 'Vorbestellung';
      default: return 'Unbekannt';
    }
  };

  const cardBg = useColorModeValue(
    'rgba(255, 255, 255, 0.15)',
    'rgba(255, 255, 255, 0.1)'
  );

  return (
    <AnimatedBox
      style={cardSpring}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg={cardBg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.2)"
      borderRadius="20px"
      p={6}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      maxW="350px"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(76, 236, 196, 0.1))',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        borderRadius: '20px',
        zIndex: 0,
      }}
    >
      {/* Discount Badge */}
      {product.originalPrice && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          colorScheme="pink"
          bg="linear-gradient(45deg, #ff6b9d, #ff9ff3)"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
          zIndex={2}
        >
          SALE
        </Badge>
      )}

      <VStack spacing={4} align="stretch" position="relative" zIndex={1}>
        {/* Product Image */}
        <Box
          position="relative"
          borderRadius="15px"
          overflow="hidden"
          bg="rgba(255, 255, 255, 0.1)"
          h="200px"
        >
          <Image
            src={product.image || '/images/placeholder-chemical.png'}
            alt={product.name}
            w="full"
            h="full"
            objectFit="cover"
            fallbackSrc="/images/placeholder-chemical.png"
          />
          
          {/* Purity Badge */}
          <Badge
            position="absolute"
            bottom={3}
            left={3}
            bg="rgba(76, 236, 196, 0.9)"
            color="black"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="bold"
          >
            {product.purity}
          </Badge>
        </Box>

        {/* Product Info */}
        <VStack spacing={3} align="stretch">
          {/* Name and CAS */}
          <Box>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
              lineHeight="short"
              textShadow="0 0 10px rgba(255, 255, 255, 0.5)"
              noOfLines={2}
            >
              {product.name}
            </Text>
            {product.cas_number && (
              <Text
                fontSize="sm"
                color="gray.300"
                mt={1}
              >
                CAS: {product.cas_number}
              </Text>
            )}
          </Box>

          {/* Molecular Formula */}
          {product.molecular_formula && (
            <HStack>
              <Icon as={FaFlask} color="psytrance.electric" />
              <Text fontSize="sm" color="psytrance.electric" fontFamily="monospace">
                {product.molecular_formula}
              </Text>
            </HStack>
          )}

          {/* Safety & Documentation Icons */}
          <HStack spacing={3} justify="center">
            {product.documentation.certificate_of_analysis && (
              <Tooltip label="Analysezertifikat verfügbar">
                <Box>
                  <Icon as={FaCertificate} color="psytrance.sunset" />
                </Box>
              </Tooltip>
            )}
            {product.documentation.safety_data_sheet && (
              <Tooltip label="Sicherheitsdatenblatt verfügbar">
                <Box>
                  <Icon as={FaShieldAlt} color="psytrance.forest" />
                </Box>
              </Tooltip>
            )}
            {product.documentation.nmr_spectrum && (
              <Tooltip label="NMR-Spektrum verfügbar">
                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="psytrance.purple">
                    NMR
                  </Text>
                </Box>
              </Tooltip>
            )}
          </HStack>

          {/* Rating */}
          <HStack justify="center">
            <HStack spacing={1}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  as={FaStar}
                  color={i < Math.floor(product.rating) ? 'psytrance.sunset' : 'gray.400'}
                  boxSize={3}
                />
              ))}
            </HStack>
            <Text fontSize="sm" color="gray.300">
              ({product.reviews_count})
            </Text>
          </HStack>

          {/* Availability */}
          <Flex justify="center">
            <Badge
              colorScheme={getAvailabilityColor(product.availability).split('.')[0]}
              variant="solid"
              borderRadius="full"
              px={3}
              py={1}
            >
              {getAvailabilityText(product.availability)}
            </Badge>
          </Flex>

          {/* Price */}
          <VStack spacing={1}>
            <HStack justify="center" align="baseline">
              {product.originalPrice && (
                <Text
                  fontSize="md"
                  color="gray.400"
                  textDecoration="line-through"
                >
                  €{product.originalPrice.toFixed(2)}
                </Text>
              )}
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="white"
                textShadow="0 0 15px rgba(255, 107, 157, 0.8)"
              >
                €{product.price.toFixed(2)}
              </Text>
            </HStack>
          </VStack>

          {/* Action Buttons */}
          <VStack spacing={2}>
            <Button
              variant="psychedelic"
              size="md"
              width="full"
              onClick={() => onViewDetails?.(product)}
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 0 25px rgba(255, 107, 157, 0.6)',
              }}
            >
              Details ansehen
            </Button>
            
            {product.availability !== 'out_of_stock' && (
              <Button
                variant="neon"
                size="sm"
                width="full"
                onClick={() => onAddToCart?.(product)}
                _hover={{
                  bg: 'psytrance.neon',
                  color: 'black',
                  boxShadow: '0 0 20px rgba(255, 107, 157, 0.8)',
                }}
              >
                In den Warenkorb
              </Button>
            )}
          </VStack>
        </VStack>
      </VStack>
    </AnimatedBox>
  );
};