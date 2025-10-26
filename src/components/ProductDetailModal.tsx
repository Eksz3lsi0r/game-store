import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Heading,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
  Link,
  IconButton,
  useToast,
  Icon,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  FaShoppingCart,
  FaHeart,
  FaShare,
  FaDownload,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";
import { APCProduct } from "../data/apc-products";

interface ProductDetailModalProps {
  product: APCProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: APCProduct, size: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const toast = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Größe auswählen",
        description: "Bitte wählen Sie eine Packungsgröße aus.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    onAddToCart(product, selectedSize, quantity);
    toast({
      title: "Zum Warenkorb hinzugefügt",
      description: `${quantity}x ${product.name} (${selectedSize}) wurde zum Warenkorb hinzugefügt.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const currentPrice = selectedSize ? product.prices[selectedSize] : 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="gray.900"
        color="white"
        border="1px solid"
        borderColor="gray.700"
      >
        <ModalHeader>
          <Flex align="center">
            <VStack align="start" spacing={0}>
              <Heading size="lg" color={product.color_theme}>
                {product.name}
              </Heading>
              <Text fontSize="sm" color="gray.400">
                {product.category} • {product.grade}
              </Text>
            </VStack>
            <Spacer />
            <HStack>
              <IconButton
                aria-label="Zu Favoriten hinzufügen"
                icon={<FaHeart />}
                variant="ghost"
                color="pink.400"
                _hover={{ bg: "pink.900" }}
              />
              <IconButton
                aria-label="Teilen"
                icon={<FaShare />}
                variant="ghost"
                color="blue.400"
                _hover={{ bg: "blue.900" }}
              />
            </HStack>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={8}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {/* Linke Spalte: Bilder */}
            <VStack spacing={4}>
              <Box
                position="relative"
                w="100%"
                h="400px"
                bg="gray.800"
                rounded="lg"
                overflow="hidden"
                border="2px solid"
                borderColor={product.color_theme}
              >
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                {product.images.length > 1 && (
                  <HStack
                    position="absolute"
                    bottom={4}
                    left="50%"
                    transform="translateX(-50%)"
                    spacing={2}
                  >
                    {product.images.map((_, index) => (
                      <Box
                        key={index}
                        w={3}
                        h={3}
                        bg={
                          index === currentImageIndex
                            ? product.color_theme
                            : "gray.600"
                        }
                        rounded="full"
                        cursor="pointer"
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </HStack>
                )}
              </Box>

              {/* Lagerbestand und Verfügbarkeit */}
              <Box w="100%" p={4} bg="gray.800" rounded="lg">
                <HStack justify="space-between" mb={3}>
                  <Text fontWeight="bold">Verfügbarkeit:</Text>
                  <Badge
                    colorScheme={
                      product.stock > 10
                        ? "green"
                        : product.stock > 0
                        ? "yellow"
                        : "red"
                    }
                  >
                    {product.stock > 10
                      ? "Auf Lager"
                      : product.stock > 0
                      ? "Wenige verfügbar"
                      : "Nicht verfügbar"}
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="gray.400">
                  {product.stock} Einheiten verfügbar
                </Text>
              </Box>
            </VStack>

            {/* Rechte Spalte: Produktinfos */}
            <VStack spacing={6} align="stretch">
              {/* Produktbeschreibung */}
              <Box>
                <Text mb={4} color="gray.300">
                  {product.detailed_description}
                </Text>

                {/* Produktdetails */}
                <SimpleGrid columns={2} spacing={3} mb={4}>
                  <Box>
                    <Text fontSize="sm" color="gray.400">
                      Reinheit:
                    </Text>
                    <Text fontWeight="bold">{product.purity}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.400">
                      CAS-Nummer:
                    </Text>
                    <Text fontWeight="bold">{product.cas_number || "N/A"}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.400">
                      Molekularformel:
                    </Text>
                    <Text fontWeight="bold">
                      {product.molecular_formula || "N/A"}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.400">
                      Hersteller:
                    </Text>
                    <Text fontWeight="bold">{product.manufacturer}</Text>
                  </Box>
                </SimpleGrid>
              </Box>

              {/* Bestellbereich */}
              <Box
                p={6}
                bg="gray.800"
                rounded="lg"
                border="2px solid"
                borderColor={product.color_theme}
              >
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color={product.color_theme}>
                    Bestellung konfigurieren
                  </Heading>

                  <Box>
                    <Text mb={2} fontWeight="bold">
                      Packungsgröße:
                    </Text>
                    <Select
                      placeholder="Größe wählen..."
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      bg="gray.700"
                      border="1px solid"
                      borderColor="gray.600"
                    >
                      {product.packaging.map((size) => (
                        <option
                          key={size}
                          value={size}
                          style={{ backgroundColor: "#2D3748" }}
                        >
                          {size} - €{product.prices[size]?.toFixed(2) || "N/A"}
                        </option>
                      ))}
                    </Select>
                  </Box>

                  <Box>
                    <Text mb={2} fontWeight="bold">
                      Menge:
                    </Text>
                    <NumberInput
                      value={quantity}
                      onChange={(_, value) => setQuantity(value || 1)}
                      min={1}
                      max={Math.min(product.stock, 50)}
                    >
                      <NumberInputField
                        bg="gray.700"
                        border="1px solid"
                        borderColor="gray.600"
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Box>

                  {selectedSize && (
                    <Box p={4} bg="gray.700" rounded="md">
                      <HStack justify="space-between" mb={2}>
                        <Text>Einzelpreis:</Text>
                        <Text fontWeight="bold">
                          €{currentPrice.toFixed(2)}
                        </Text>
                      </HStack>
                      <HStack justify="space-between" mb={2}>
                        <Text>Menge:</Text>
                        <Text>{quantity}x</Text>
                      </HStack>
                      <Divider my={2} />
                      <HStack justify="space-between">
                        <Text fontSize="lg" fontWeight="bold">
                          Gesamtpreis:
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color={product.color_theme}
                        >
                          €{(currentPrice * quantity).toFixed(2)}
                        </Text>
                      </HStack>
                    </Box>
                  )}

                  <Button
                    leftIcon={<FaShoppingCart />}
                    colorScheme="blue"
                    size="lg"
                    onClick={handleAddToCart}
                    isDisabled={!selectedSize || product.stock === 0}
                    bg={product.color_theme}
                    _hover={{ opacity: 0.8 }}
                  >
                    In den Warenkorb
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>

          {/* Tabs für weitere Informationen */}
          <Box mt={8}>
            <Tabs colorScheme="blue" variant="line">
              <TabList>
                <Tab>Spezifikationen</Tab>
                <Tab>Anwendungen</Tab>
                <Tab>Sicherheit</Tab>
                <Tab>Versand</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Table variant="simple" size="sm">
                    <Thead>
                      <Tr>
                        <Th color="gray.400">Eigenschaft</Th>
                        <Th color="gray.400">Wert</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <Tr key={key}>
                            <Td>{key}</Td>
                            <Td fontWeight="bold">{value}</Td>
                          </Tr>
                        )
                      )}
                    </Tbody>
                  </Table>
                  {product.batch_info && (
                    <Box mt={4} p={3} bg="gray.800" rounded="md">
                      <HStack>
                        <Icon as={FaIndustry} color={product.color_theme} />
                        <Text fontSize="sm">
                          <strong>Chargen-Info:</strong> {product.batch_info}
                        </Text>
                      </HStack>
                    </Box>
                  )}
                </TabPanel>

                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {product.applications.map((app, index) => (
                      <Box key={index} p={3} bg="gray.800" rounded="md">
                        <Text>{app}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel>
                  <Alert
                    status="warning"
                    bg="orange.900"
                    border="1px solid"
                    borderColor="orange.600"
                  >
                    <AlertIcon />
                    <Box>
                      <AlertTitle>Sicherheitshinweise:</AlertTitle>
                      <AlertDescription>{product.safety_info}</AlertDescription>
                    </Box>
                  </Alert>

                  {product.safety_data_sheet && (
                    <Box mt={4}>
                      <Link
                        href={product.safety_data_sheet}
                        isExternal
                        color={product.color_theme}
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                      >
                        <FaDownload />
                        Sicherheitsdatenblatt herunterladen
                      </Link>
                    </Box>
                  )}
                </TabPanel>

                <TabPanel>
                  <VStack spacing={4} align="stretch">
                    <Box p={4} bg="gray.800" rounded="md">
                      <HStack mb={2}>
                        <Icon as={FaTruck} color={product.color_theme} />
                        <Text fontWeight="bold">Versandinformationen</Text>
                      </HStack>
                      <Text>{product.shipping_info}</Text>
                    </Box>

                    <Box p={4} bg="blue.900" rounded="md">
                      <Text fontWeight="bold" mb={2}>
                        Lieferzeiten:
                      </Text>
                      <Text>• Standardversand: 2-3 Werktage</Text>
                      <Text>• Expressversand: 1-2 Werktage</Text>
                      <Text>• Gefahrgut: 3-5 Werktage</Text>
                    </Box>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
