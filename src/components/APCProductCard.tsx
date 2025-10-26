import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
  Divider,
  Tooltip,
  Icon,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FaFlask, FaShieldAlt, FaEye } from "react-icons/fa";
import { APCProduct } from "../data/apc-products";
import { useFadeInOnScroll } from "../hooks/useScrollAnimations";

interface APCProductCardProps {
  product: APCProduct;
  onViewDetails: (product: APCProduct) => void;
}

export const APCProductCard: React.FC<APCProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const fadeRef = useFadeInOnScroll();

  return (
    <Box
      ref={fadeRef}
      className="fade-in-element"
      sx={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "&.fade-in-visible": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      <Card
        variant="glass"
        bg="rgba(255, 255, 255, 0.08)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.12)"
        borderRadius="20px"
        overflow="hidden"
        h="100%"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: `0 20px 40px ${product.color_theme}25`,
          borderColor: product.color_theme,
          bg: "rgba(255, 255, 255, 0.12)",
        }}
        cursor="pointer"
      >
        <CardBody p={6}>
          <VStack align="stretch" spacing={4} h="100%">
            {/* Header mit Kategorie Badge */}
            <Flex align="center">
              <Icon as={FaFlask} color={product.color_theme} mr={2} />
              <Badge
                colorScheme="purple"
                variant="subtle"
                borderRadius="full"
                px={3}
                py={1}
                bg={`${product.color_theme}20`}
                color={product.color_theme}
                border={`1px solid ${product.color_theme}40`}
              >
                {product.category}
              </Badge>
              <Spacer />
              <Text fontSize="sm" color="gray.400" fontWeight="bold">
                {product.price_range}
              </Text>
            </Flex>

            {/* Produktname */}
            <Heading
              size="md"
              color="white"
              mb={2}
              sx={{
                background: `linear-gradient(45deg, ${product.color_theme}, white)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {product.name}
            </Heading>

            {/* Beschreibung */}
            <Text fontSize="sm" color="gray.300" lineHeight="1.5">
              {product.description}
            </Text>

            {/* Chemische Informationen */}
            {(product.molecular_formula || product.cas_number) && (
              <VStack align="stretch" spacing={2}>
                <Divider borderColor="gray.600" />
                <HStack spacing={4}>
                  {product.molecular_formula && (
                    <Tooltip label="Molekulare Formel" placement="top">
                      <Box>
                        <Text fontSize="xs" color="gray.400">
                          Formel
                        </Text>
                        <Text
                          fontSize="sm"
                          color={product.color_theme}
                          fontFamily="monospace"
                        >
                          {product.molecular_formula}
                        </Text>
                      </Box>
                    </Tooltip>
                  )}
                  {product.cas_number && (
                    <Tooltip label="CAS-Nummer" placement="top">
                      <Box>
                        <Text fontSize="xs" color="gray.400">
                          CAS
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.200"
                          fontFamily="monospace"
                        >
                          {product.cas_number}
                        </Text>
                      </Box>
                    </Tooltip>
                  )}
                </HStack>
              </VStack>
            )}

            {/* Reinheit und Grade */}
            <HStack spacing={4}>
              <Box>
                <Text fontSize="xs" color="gray.400">
                  Reinheit
                </Text>
                <Text fontSize="sm" color="white" fontWeight="semibold">
                  {product.purity}
                </Text>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.400">
                  Grade
                </Text>
                <Text fontSize="sm" color="white" fontWeight="semibold">
                  {product.grade}
                </Text>
              </Box>
            </HStack>

            {/* Packungsgrößen */}
            <Box>
              <Text fontSize="xs" color="gray.400" mb={2}>
                Verfügbare Größen
              </Text>
              <Flex wrap="wrap" gap={1}>
                {product.packaging.slice(0, 4).map((size, index) => (
                  <Badge
                    key={index}
                    size="sm"
                    variant="outline"
                    colorScheme="cyan"
                    borderColor={product.color_theme}
                    color={product.color_theme}
                    bg="rgba(255, 255, 255, 0.05)"
                  >
                    {size}
                  </Badge>
                ))}
                {product.packaging.length > 4 && (
                  <Badge size="sm" variant="outline" colorScheme="gray">
                    +{product.packaging.length - 4}
                  </Badge>
                )}
              </Flex>
            </Box>

            {/* Sicherheitshinweis */}
            <HStack>
              <Icon as={FaShieldAlt} color="yellow.400" />
              <Text fontSize="xs" color="yellow.200">
                {product.safety_info}
              </Text>
            </HStack>

            <Spacer />

            {/* Action Buttons */}
            <VStack spacing={3}>
              <Button
                variant="psychedelic"
                size="sm"
                width="100%"
                leftIcon={<FaEye />}
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(product);
                }}
                bg={`linear-gradient(45deg, ${product.color_theme}, ${product.color_theme}aa)`}
                _hover={{
                  bg: `linear-gradient(45deg, ${product.color_theme}dd, ${product.color_theme})`,
                }}
              >
                Details & Bestellung
              </Button>

              <Text fontSize="xs" color="gray.400" textAlign="center">
                Größen ab €
                {Math.min(...Object.values(product.prices)).toFixed(2)}
              </Text>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};
