import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const NetflixHero = () => {
  return (
    <Box
      position="relative"
      minHeight="70vh"
      bgGradient="linear(to-r, rgba(0,0,0,0.8), rgba(0,0,0,0.4))"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="linear-gradient(45deg, #000 0%, #141414 50%, #000 100%)"
        bgSize="cover"
        bgPosition="center"
        opacity="0.9"
        zIndex="-1"
      />

      {/* Overlay Gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-r, rgba(0,0,0,0.9), transparent)"
        zIndex="1"
      />

      <Container maxW="container.xl" position="relative" zIndex="2" py={20}>
        <VStack align="start" spacing={6} maxW="600px">
          <Heading variant="hero" color="white">
            ChemSpace
          </Heading>

          <Text fontSize="xl" color="gray.300" lineHeight="1.6">
            Entdecke eine neue Welt der wissenschaftlichen Innovation.
            Hochwertige Chemikalien und Laborausrüstung für Forschung und
            Industrie.
          </Text>

          <Text fontSize="lg" color="gray.400">
            Streaming-inspiriertes Design trifft auf professionelle
            Wissenschaft.
          </Text>

          <HStack spacing={4} pt={4}>
            <Button variant="netflix" size="lg" leftIcon={<FaPlay />} px={8}>
              Jetzt entdecken
            </Button>

            <Button
              variant="secondary"
              size="lg"
              leftIcon={<FaInfoCircle />}
              px={8}
            >
              Mehr erfahren
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Bottom fade */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="100px"
        bgGradient="linear(to-t, rgba(0,0,0,1), transparent)"
        zIndex="2"
      />
    </Box>
  );
};

export default NetflixHero;
