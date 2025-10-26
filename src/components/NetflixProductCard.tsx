import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Button,
  Badge,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";

interface NetflixProductCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  isNew?: boolean;
  purity?: string;
}

const NetflixProductCard = ({
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  purity,
}: NetflixProductCardProps) => {
  return (
    <Card
      bg="#141414"
      border="none"
      borderRadius="8px"
      transition="all 0.3s ease"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
        zIndex: 10,
      }}
      maxW="300px"
      h="400px"
    >
      {/* Image Container */}
      <Box
        position="relative"
        h="200px"
        bgGradient="linear(45deg, #E50914 0%, #000000 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {image ? (
          <Image src={image} alt={name} objectFit="cover" w="100%" h="100%" />
        ) : (
          <Text
            fontSize="3xl"
            color="white"
            fontWeight="bold"
            textAlign="center"
            opacity="0.8"
          >
            {name.slice(0, 2)}
          </Text>
        )}

        {/* New Badge */}
        {isNew && (
          <Badge
            position="absolute"
            top="2"
            left="2"
            bg="#E50914"
            color="white"
            fontSize="xs"
            fontWeight="bold"
            px="2"
            py="1"
            borderRadius="2px"
          >
            NEU
          </Badge>
        )}

        {/* Category Badge */}
        <Badge
          position="absolute"
          top="2"
          right="2"
          bg="rgba(0, 0, 0, 0.7)"
          color="white"
          fontSize="xs"
          px="2"
          py="1"
          borderRadius="2px"
        >
          {category}
        </Badge>
      </Box>

      <CardBody p="4">
        <VStack align="start" spacing="3" h="180px">
          {/* Title */}
          <Heading size="md" color="white" lineHeight="1.2" noOfLines={2}>
            {name}
          </Heading>

          {/* Purity */}
          {purity && (
            <HStack>
              <Text fontSize="sm" color="#46D369" fontWeight="600">
                Reinheit:
              </Text>
              <Text fontSize="sm" color="white">
                {purity}
              </Text>
            </HStack>
          )}

          {/* Description */}
          <Text
            fontSize="sm"
            color="gray.400"
            noOfLines={3}
            flex="1"
            lineHeight="1.4"
          >
            {description}
          </Text>

          {/* Price */}
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="#E50914"
            alignSelf="flex-start"
          >
            {price}
          </Text>

          {/* Action Buttons */}
          <HStack spacing="2" w="100%">
            <Button
              variant="netflix"
              size="sm"
              leftIcon={<FaPlay />}
              flex="1"
              fontSize="xs"
            >
              Details
            </Button>
            <Button variant="ghost" size="sm" minW="auto" p="2">
              <FaPlus />
            </Button>
            <Button variant="ghost" size="sm" minW="auto" p="2">
              <FaThumbsUp />
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default NetflixProductCard;
