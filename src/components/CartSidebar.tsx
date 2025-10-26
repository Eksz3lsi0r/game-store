import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  Badge,
  Alert,
  AlertIcon,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash, FaCreditCard, FaShoppingCart } from "react-icons/fa";
import { CartItem } from "../hooks/useCart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  totalPrice: number;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  totalPrice,
}) => {
  if (cartItems.length === 0) {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            <HStack>
              <FaShoppingCart />
              <Text>Warenkorb</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} justify="center" h="100%">
              <FaShoppingCart size={64} color="#718096" />
              <Text fontSize="xl" color="gray.400">
                Ihr Warenkorb ist leer
              </Text>
              <Text color="gray.500" textAlign="center">
                Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen.
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  const shippingCost = totalPrice > 100 ? 0 : 15.99;
  const finalTotal = totalPrice + shippingCost;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
      <DrawerOverlay />
      <DrawerContent bg="gray.900" color="white">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
          <HStack>
            <FaShoppingCart />
            <Text>Warenkorb</Text>
            <Badge colorScheme="blue" ml={2}>
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch">
            {cartItems.map((item) => (
              <Box
                key={item.id}
                p={4}
                bg="gray.800"
                rounded="lg"
                border="1px solid"
                borderColor="gray.700"
              >
                <HStack spacing={4} align="start">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    boxSize="80px"
                    objectFit="cover"
                    rounded="md"
                    border="2px solid"
                    borderColor={item.product.color_theme}
                  />

                  <VStack flex={1} align="start" spacing={2}>
                    <Text fontWeight="bold" fontSize="sm">
                      {item.product.name}
                    </Text>
                    <Text fontSize="xs" color="gray.400">
                      {item.product.category} • {item.size}
                    </Text>

                    <HStack spacing={3} w="100%">
                      <Box minW="80px">
                        <Text fontSize="xs" color="gray.400" mb={1}>
                          Menge:
                        </Text>
                        <NumberInput
                          size="sm"
                          value={item.quantity}
                          onChange={(_, value) =>
                            onUpdateQuantity(item.id, value || 1)
                          }
                          min={1}
                          max={Math.min(item.product.stock, 50)}
                        >
                          <NumberInputField
                            bg="gray.700"
                            border="1px solid"
                            borderColor="gray.600"
                            fontSize="xs"
                          />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Box>

                      <Spacer />

                      <VStack spacing={1} align="end">
                        <Text
                          fontSize="sm"
                          fontWeight="bold"
                          color={item.product.color_theme}
                        >
                          €
                          {(
                            (item.product.prices[item.size] || 0) *
                            item.quantity
                          ).toFixed(2)}
                        </Text>
                        <Text fontSize="xs" color="gray.400">
                          €{(item.product.prices[item.size] || 0).toFixed(2)} /
                          Stück
                        </Text>
                      </VStack>

                      <IconButton
                        size="sm"
                        aria-label="Entfernen"
                        icon={<FaTrash />}
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => onRemoveItem(item.id)}
                      />
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            ))}

            <Divider borderColor="gray.700" />

            {/* Kostenaufstellung */}
            <Box p={4} bg="gray.800" rounded="lg">
              <VStack spacing={3}>
                <HStack w="100%" justify="space-between">
                  <Text>Zwischensumme:</Text>
                  <Text fontWeight="bold">€{totalPrice.toFixed(2)}</Text>
                </HStack>

                <HStack w="100%" justify="space-between">
                  <Text>Versandkosten:</Text>
                  <Text
                    fontWeight="bold"
                    color={shippingCost === 0 ? "green.400" : "inherit"}
                  >
                    {shippingCost === 0
                      ? "Kostenlos"
                      : `€${shippingCost.toFixed(2)}`}
                  </Text>
                </HStack>

                {shippingCost > 0 && (
                  <Alert status="info" bg="blue.900" fontSize="sm">
                    <AlertIcon />
                    Versandkostenfrei ab €100
                  </Alert>
                )}

                <Divider borderColor="gray.600" />

                <HStack w="100%" justify="space-between" fontSize="lg">
                  <Text fontWeight="bold">Gesamtsumme:</Text>
                  <Text fontWeight="bold" color="blue.400">
                    €{finalTotal.toFixed(2)}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px" borderColor="gray.700">
          <VStack w="100%" spacing={3}>
            <Button
              leftIcon={<FaCreditCard />}
              colorScheme="blue"
              size="lg"
              w="100%"
              onClick={onCheckout}
              bg="blue.500"
              _hover={{ bg: "blue.600" }}
            >
              Zur Kasse (€{finalTotal.toFixed(2)})
            </Button>

            <Text fontSize="xs" color="gray.400" textAlign="center">
              Sichere Zahlung mit SSL-Verschlüsselung
            </Text>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
