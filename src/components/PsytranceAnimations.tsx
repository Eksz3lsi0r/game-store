import React from "react";
import { Box, keyframes } from "@chakra-ui/react";

// Sanfte schwebende Partikel Animation
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
`;

// Sanfte Wellen Animation
const waveAnimation = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50% { transform: translateX(-50%) translateY(-10px); }
`;

// Gradient Animation
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Pulse Animation für sanfte Glüh-Effekte
const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(124, 0, 230, 0.3); }
  50% { box-shadow: 0 0 40px rgba(124, 0, 230, 0.6), 0 0 60px rgba(0, 160, 230, 0.3); }
`;

// Haupthintergrund Komponente
export const PsychedelicBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      minHeight="100vh"
      background="linear-gradient(-45deg, #0a0a0a, #1a1a2e, #16213e, #0d1421)"
      backgroundSize="400% 400%"
      animation={`${gradientShift} 15s ease infinite`}
      position="relative"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

// Sanfte schwebende Partikel
export const ParticleField: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <Box
      key={i}
      position="absolute"
      width="4px"
      height="4px"
      borderRadius="50%"
      background="linear-gradient(45deg, rgba(124, 0, 230, 0.6), rgba(0, 160, 230, 0.6))"
      left={`${Math.random() * 100}%`}
      top={`${Math.random() * 100}%`}
      animation={`${floatAnimation} ${
        3 + Math.random() * 4
      }s ease-in-out infinite`}
      sx={{
        animationDelay: `${Math.random() * 2}s`,
        filter: "blur(1px)",
      }}
    />
  ));

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={1}
    >
      {particles}
    </Box>
  );
};

// Sanfte Wellen am unteren Rand
export const PsyWave: React.FC = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left="50%"
      transform="translateX(-50%)"
      width="120%"
      height="100px"
      background="linear-gradient(90deg, transparent, rgba(124, 0, 230, 0.1), rgba(0, 160, 230, 0.1), transparent)"
      borderRadius="50% 50% 0 0"
      animation={`${waveAnimation} 6s ease-in-out infinite`}
      zIndex={2}
      filter="blur(2px)"
    />
  );
};

// Glühende Orbs für zusätzliche Atmosphäre
export const GlowOrbs: React.FC = () => {
  const orbs = Array.from({ length: 5 }, (_, i) => (
    <Box
      key={i}
      position="absolute"
      width={`${60 + Math.random() * 40}px`}
      height={`${60 + Math.random() * 40}px`}
      borderRadius="50%"
      background={`radial-gradient(circle, rgba(${
        Math.random() > 0.5 ? "124, 0, 230" : "0, 160, 230"
      }, 0.2) 0%, transparent 70%)`}
      left={`${Math.random() * 100}%`}
      top={`${Math.random() * 100}%`}
      animation={`${pulseGlow} ${4 + Math.random() * 3}s ease-in-out infinite`}
      sx={{
        animationDelay: `${Math.random() * 3}s`,
        filter: "blur(3px)",
      }}
    />
  ));

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={1}
    >
      {orbs}
    </Box>
  );
};
