import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAtom, FaFlask, FaMicroscope, FaShoppingCart } from "react-icons/fa";
import psychedelicTheme from "./psychedelicTheme";
import { APCProduct } from "./data/apc-products";
import {
  PsychedelicBackground,
  ParticleField,
  PsyWave,
  GlowOrbs,
} from "./components/PsytranceAnimations";
import { APCProductCard } from "./components/APCProductCard";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CartSidebar } from "./components/CartSidebar";
import { apcProducts, apcCategories } from "./data/apc-products";
import {
  useScrollAnimation,
  useParallaxScroll,
} from "./hooks/useScrollAnimations";
import { useCart } from "./hooks/useCart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<APCProduct | null>(
    null
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    cartItems,
    cartCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const heroRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();
  const productsRef = useScrollAnimation();
  const parallaxRef = useParallaxScroll(0.3);

  const handleAddToCart = (
    product: APCProduct,
    size: string,
    quantity: number
  ) => {
    addToCart(product, size, quantity);
  };

  const handleViewDetails = (product: APCProduct) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with:", cartItems);
    // Hier würde die Checkout-Logik implementiert werden
  };

  const filteredProducts = selectedCategory
    ? apcProducts.filter((product) => product.category === selectedCategory)
    : apcProducts.slice(0, 12); // Zeige erste 12 Produkte wenn keine Kategorie gewählt

  return (
    <ChakraProvider theme={psychedelicTheme}>
      <Box minHeight="100vh" position="relative">
        <PsychedelicBackground>
          <ParticleField />
          <GlowOrbs />

          {/* Hero Section */}
          <Box
            ref={heroRef}
            position="relative"
            textAlign="center"
            py={20}
            zIndex={3}
          >
            <Container maxW="1200px">
              <VStack spacing={6}>
                <HStack spacing={4} justify="center">
                  <Icon as={FaAtom} boxSize={12} color="primary.400" />
                  <Icon as={FaFlask} boxSize={16} color="secondary.400" />
                  <Icon as={FaMicroscope} boxSize={12} color="accent.400" />
                </HStack>

                <Heading
                  as="h1"
                  size="4xl"
                  variant="psychedelic"
                  mb={4}
                  textShadow="0 0 30px rgba(124, 0, 230, 0.5)"
                >
                  🧪 ChemSpace Lab 🧪
                </Heading>

                <Text
                  fontSize="xl"
                  color="white"
                  variant="glow"
                  maxW="600px"
                  mx="auto"
                  textAlign="center"
                >
                  Dein Portal für hochreine Laborchemikalien und professionelle
                  Laborausrüstung. Entdecke unser umfassendes Sortiment von APC
                  Pure.
                </Text>

                <Text fontSize="md" color="gray.300" fontStyle="italic">
                  "Simplicity for Science" - Über 10.000 Produktlinien für deine
                  Forschung
                </Text>
              </VStack>
            </Container>
          </Box>

          {/* Kategorien Section */}
          <Box ref={categoriesRef} py={16} position="relative" zIndex={3}>
            <Container maxW="1200px">
              <Heading
                as="h2"
                size="2xl"
                textAlign="center"
                mb={12}
                variant="neon"
              >
                Produktkategorien
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
              >
                {apcCategories.map((category) => (
                  <Box
                    key={category.id}
                    backdropFilter="blur(15px)"
                    border="1px solid rgba(255, 255, 255, 0.15)"
                    borderRadius="20px"
                    p={6}
                    textAlign="center"
                    cursor="pointer"
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.name
                          ? null
                          : category.name
                      )
                    }
                    _hover={{
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow: `0 20px 40px ${category.color_theme}30`,
                      bg: "rgba(255, 255, 255, 0.12)",
                    }}
                    bg={
                      selectedCategory === category.name
                        ? "rgba(255, 255, 255, 0.15)"
                        : "rgba(255, 255, 255, 0.08)"
                    }
                    borderColor={
                      selectedCategory === category.name
                        ? category.color_theme
                        : "rgba(255, 255, 255, 0.15)"
                    }
                  >
                    <Text fontSize="3xl" mb={3}>
                      {category.icon}
                    </Text>
                    <Heading size="md" mb={3} color="white">
                      {category.name}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color="gray.300"
                      mb={4}
                      lineHeight="1.4"
                    >
                      {category.description}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={category.color_theme}
                      fontWeight="bold"
                      textShadow={`0 0 10px ${category.color_theme}50`}
                    >
                      {category.product_count} Produkte
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Container>
          </Box>

          {/* Parallax Divider */}
          <Box
            ref={parallaxRef}
            height="200px"
            background="linear-gradient(45deg, rgba(124, 0, 230, 0.1), rgba(0, 160, 230, 0.1))"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
            >
              <Heading variant="neon" size="lg">
                {selectedCategory
                  ? `${selectedCategory} Produkte`
                  : "Empfohlene Produkte"}
              </Heading>
            </Box>
          </Box>

          {/* Produkte Section */}
          <Box ref={productsRef} py={16} position="relative" zIndex={3}>
            <Container maxW="1400px">
              {selectedCategory && (
                <Box textAlign="center" mb={8}>
                  <Text
                    fontSize="md"
                    color="gray.300"
                    cursor="pointer"
                    onClick={() => setSelectedCategory(null)}
                    _hover={{ color: "white", textDecoration: "underline" }}
                  >
                    ← Zurück zu allen Kategorien
                  </Text>
                </Box>
              )}

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                spacing={8}
              >
                {filteredProducts.map((product) => (
                  <APCProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </SimpleGrid>

              {!selectedCategory && (
                <Box textAlign="center" mt={12}>
                  <Text color="gray.400" fontSize="lg">
                    ... und über 9.000 weitere Produkte in unserem Katalog
                  </Text>
                </Box>
              )}
            </Container>
          </Box>

          {/* Warenkorb-Button (schwebend) */}
          <Box position="fixed" top={6} right={6} zIndex={1000}>
            <IconButton
              aria-label="Warenkorb öffnen"
              icon={<FaShoppingCart />}
              size="lg"
              colorScheme="blue"
              bg="blue.500"
              color="white"
              rounded="full"
              shadow="2xl"
              onClick={() => setIsCartOpen(true)}
              _hover={{ bg: "blue.600", transform: "scale(1.1)" }}
              transition="all 0.2s"
            />
            {cartCount > 0 && (
              <Badge
                position="absolute"
                top="-2"
                right="-2"
                bg="red.500"
                color="white"
                rounded="full"
                minW="20px"
                h="20px"
                fontSize="xs"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {cartCount}
              </Badge>
            )}
          </Box>

          {/* Produktdetail-Modal */}
          <ProductDetailModal
            product={selectedProduct}
            isOpen={selectedProduct !== null}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />

          {/* Warenkorb-Sidebar */}
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onCheckout={handleCheckout}
            totalPrice={totalPrice}
          />

          {/* Footer Info */}
          <Box py={16} position="relative" zIndex={3} bg="rgba(0, 0, 0, 0.3)">
            <Container maxW="1200px">
              <VStack spacing={6} textAlign="center">
                <Heading size="lg" color="white">
                  APC Pure - Manchester, UK
                </Heading>
                <Text color="gray.300" maxW="800px">
                  Als führender Hersteller bieten wir eine umfassende Palette
                  von Chemikalien, Reagenzien, Laborgeräten und
                  Verbrauchsmaterialien. Alle unsere Produkte werden in unserer
                  Anlage in Manchester, UK hergestellt, abgefüllt und verpackt.
                </Text>
                <HStack spacing={8} justify="center">
                  <VStack>
                    <Text color="white" fontWeight="bold">
                      Schnelle Lieferung
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      Royal Mail oder ADR-Kurier
                    </Text>
                  </VStack>
                  <VStack>
                    <Text color="white" fontWeight="bold">
                      Qualitätssicherung
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      Verschiedene Grades verfügbar
                    </Text>
                  </VStack>
                  <VStack>
                    <Text color="white" fontWeight="bold">
                      Kundenservice
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      Vor- und Nachverkaufsbetreuung
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </Container>
          </Box>

          <PsyWave />
        </PsychedelicBackground>
      </Box>
    </ChakraProvider>
  );
}

export default App;
