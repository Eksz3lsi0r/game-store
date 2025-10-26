import {
    Box,
    Container,
    Grid,
    GridItem,
    VStack,
    HStack,
    Text,
    Link,
    Divider,
    IconButton,
    Input,
    Button,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
    FiMail, 
    FiPhone, 
    FiMapPin, 
    FiFacebook, 
    FiTwitter, 
    FiInstagram, 
    FiLinkedin,
    FiSend
} from 'react-icons/fi';

const MotionBox = motion(Box);

export const AlanotronixFooter = () => {
    return (
        <MotionBox
            as="footer"
            bg="gray.900"
            borderTop="1px solid"
            borderColor="gray.700"
            pt={12}
            pb={6}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Container maxW="1400px">
                <Grid
                    templateColumns={{ 
                        base: '1fr', 
                        md: 'repeat(2, 1fr)', 
                        lg: 'repeat(4, 1fr)' 
                    }}
                    gap={8}
                    mb={8}
                >
                    {/* Company Info */}
                    <GridItem>
                        <VStack align="start" spacing={4}>
                            <Text
                                fontSize="2xl"
                                fontWeight="900"
                                bgGradient="linear(to-r, brand.400, accent.400)"
                                bgClip="text"
                            >
                                Alanotronix
                            </Text>
                            <Text color="gray.300" fontSize="sm">
                                Dein Premium Online-Shop für alles was das Herz begehrt. 
                                Von Elektronik bis Mode - entdecke unendliche Möglichkeiten 
                                mit dem besten Shopping-Erlebnis.
                            </Text>
                            <VStack align="start" spacing={2}>
                                <HStack spacing={2} color="gray.400">
                                    <FiMapPin size="16px" />
                                    <Text fontSize="sm">Premium Street 123, 12345 Shopville</Text>
                                </HStack>
                                <HStack spacing={2} color="gray.400">
                                    <FiPhone size="16px" />
                                    <Text fontSize="sm">+49 (0) 123 456 789</Text>
                                </HStack>
                                <HStack spacing={2} color="gray.400">
                                    <FiMail size="16px" />
                                    <Text fontSize="sm">hello@alanotronix.com</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </GridItem>

                    {/* Quick Links */}
                    <GridItem>
                        <VStack align="start" spacing={4}>
                            <Text fontSize="lg" fontWeight="600" color="white">
                                Quick Links
                            </Text>
                            <VStack align="start" spacing={2}>
                                {[
                                    'Elektronik',
                                    'Mode & Style', 
                                    'Haus & Garten',
                                    'Sport & Freizeit',
                                    'Beauty & Gesundheit',
                                    'Alle Kategorien'
                                ].map((link) => (
                                    <Link
                                        key={link}
                                        color="gray.400"
                                        fontSize="sm"
                                        _hover={{ 
                                            color: 'brand.400',
                                            transform: 'translateX(4px)'
                                        }}
                                        transition="all 0.2s"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </VStack>
                        </VStack>
                    </GridItem>

                    {/* Customer Service */}
                    <GridItem>
                        <VStack align="start" spacing={4}>
                            <Text fontSize="lg" fontWeight="600" color="white">
                                Kundenservice
                            </Text>
                            <VStack align="start" spacing={2}>
                                {[
                                    'Mein Konto',
                                    'Bestellstatus',
                                    'Versand & Rückgabe',
                                    'Größentabelle',
                                    'FAQ',
                                    'Kontakt'
                                ].map((link) => (
                                    <Link
                                        key={link}
                                        color="gray.400"
                                        fontSize="sm"
                                        _hover={{ 
                                            color: 'accent.400',
                                            transform: 'translateX(4px)'
                                        }}
                                        transition="all 0.2s"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </VStack>
                        </VStack>
                    </GridItem>

                    {/* Newsletter */}
                    <GridItem>
                        <VStack align="start" spacing={4}>
                            <Text fontSize="lg" fontWeight="600" color="white">
                                Newsletter
                            </Text>
                            <Text color="gray.400" fontSize="sm">
                                Bleib auf dem Laufenden über neue Produkte, 
                                exklusive Angebote und Shopping-Trends.
                            </Text>
                            <InputGroup size="md">
                                <Input
                                    placeholder="Deine E-Mail Adresse"
                                    bg="gray.800"
                                    border="1px solid"
                                    borderColor="gray.600"
                                    _focus={{
                                        borderColor: 'brand.400',
                                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)'
                                    }}
                                    pr="4.5rem"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button 
                                        h="1.75rem" 
                                        size="sm" 
                                        variant="primary"
                                        leftIcon={<FiSend size="12px" />}
                                    >
                                        OK
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            
                            {/* Social Media */}
                            <VStack align="start" spacing={2} w="full">
                                <Text fontSize="sm" fontWeight="500" color="gray.300">
                                    Folge uns
                                </Text>
                                <HStack spacing={2}>
                                    {[
                                        { icon: FiFacebook, color: '#1877F2' },
                                        { icon: FiTwitter, color: '#1DA1F2' },
                                        { icon: FiInstagram, color: '#E4405F' },
                                        { icon: FiLinkedin, color: '#0A66C2' }
                                    ].map(({ icon: Icon, color }, index) => (
                                        <IconButton
                                            key={index}
                                            aria-label={`Social ${index}`}
                                            icon={<Icon />}
                                            size="sm"
                                            variant="ghost"
                                            color="gray.400"
                                            _hover={{
                                                color: color,
                                                transform: 'translateY(-2px)',
                                                bg: 'whiteAlpha.100'
                                            }}
                                            transition="all 0.2s"
                                        />
                                    ))}
                                </HStack>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>

                <Divider borderColor="gray.700" mb={6} />

                {/* Bottom Section */}
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr auto' }}
                    gap={4}
                    alignItems="center"
                >
                    <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
                        <Text color="gray.400" fontSize="sm">
                            © 2024 Alanotronix. Alle Rechte vorbehalten.
                        </Text>
                        <HStack spacing={4} fontSize="sm">
                            <Link color="gray.400" _hover={{ color: 'brand.400' }}>
                                Datenschutz
                            </Link>
                            <Link color="gray.400" _hover={{ color: 'brand.400' }}>
                                AGB
                            </Link>
                            <Link color="gray.400" _hover={{ color: 'brand.400' }}>
                                Impressum
                            </Link>
                            <Link color="gray.400" _hover={{ color: 'brand.400' }}>
                                Cookies
                            </Link>
                        </HStack>
                    </VStack>

                    {/* Trust Badges */}
                    <HStack spacing={4} opacity={0.6}>
                        <Box
                            px={3}
                            py={1}
                            bg="gray.800"
                            borderRadius="md"
                            fontSize="xs"
                            color="gray.400"
                            border="1px solid"
                            borderColor="gray.600"
                        >
                            🔒 SSL Verschlüsselung
                        </Box>
                        <Box
                            px={3}
                            py={1}
                            bg="gray.800"
                            borderRadius="md"
                            fontSize="xs"
                            color="gray.400"
                            border="1px solid"
                            borderColor="gray.600"
                        >
                            ✅ Käuferschutz
                        </Box>
                        <Box
                            px={3}
                            py={1}
                            bg="gray.800"
                            borderRadius="md"
                            fontSize="xs"
                            color="gray.400"
                            border="1px solid"
                            borderColor="gray.600"
                        >
                            🚚 Schneller Versand
                        </Box>
                    </HStack>
                </Grid>
            </Container>
        </MotionBox>
    );
};