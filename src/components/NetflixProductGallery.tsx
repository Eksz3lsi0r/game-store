import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NetflixProductCard from "./NetflixProductCard";
import { chemicalProducts } from "../data/chemical-products";

interface ProductRowProps {
  title: string;
  category?: string;
  featured?: boolean;
}

const ProductRow = ({ title, category, featured = false }: ProductRowProps) => {
  // Filter products by category if specified
  const filteredProducts = category
    ? chemicalProducts.filter((product) => product.category === category)
    : chemicalProducts;

  // Take first 6 products for the row
  const rowProducts = filteredProducts.slice(0, 6);

  return (
    <Box py={6}>
      <Container maxW="container.xl">
        <HStack justify="space-between" align="center" mb={4}>
          <Heading size={featured ? "lg" : "md"} color="white" fontWeight="600">
            {title}
          </Heading>
          <HStack spacing={2}>
            <Button variant="ghost" size="sm" color="white">
              <FaChevronLeft />
            </Button>
            <Button variant="ghost" size="sm" color="white">
              <FaChevronRight />
            </Button>
          </HStack>
        </HStack>

        <Box overflowX="auto" pb={4}>
          <HStack spacing={4} align="stretch" minW="max-content">
            {rowProducts.map((product, index) => (
              <NetflixProductCard
                key={`${product.id}-${index}`}
                name={product.name}
                description={product.description}
                price={`€${product.price}`}
                category={product.category}
                purity={product.purity}
                isNew={index < 2} // Mark first 2 as new
              />
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

const NetflixProductGallery = () => {
  const categories = [
    "Säuren und Basen",
    "Organische Verbindungen",
    "Anorganische Salze",
    "Lösungsmittel",
  ];

  return (
    <Box bg="#000000" minH="100vh" pt={20}>
      <VStack spacing={0} align="stretch">
        {/* Featured Products */}
        <ProductRow title="Beliebte Chemikalien" featured />

        {/* Category Rows */}
        {categories.map((category) => (
          <ProductRow key={category} title={category} category={category} />
        ))}

        {/* New Arrivals */}
        <ProductRow title="Neu im Sortiment" />

        {/* All Products Grid */}
        <Box py={10}>
          <Container maxW="container.xl">
            <Heading size="lg" color="white" mb={6} fontWeight="600">
              Alle Produkte
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {chemicalProducts.slice(0, 12).map((product) => (
                <NetflixProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={`€${product.price}`}
                  category={product.category}
                  purity={product.purity}
                />
              ))}
            </SimpleGrid>

            {/* Load More Button */}
            <Box textAlign="center" mt={10}>
              <Button variant="secondary" size="lg" px={8}>
                Mehr Produkte laden
              </Button>
            </Box>
          </Container>
        </Box>
      </VStack>
    </Box>
  );
};

export default NetflixProductGallery;
