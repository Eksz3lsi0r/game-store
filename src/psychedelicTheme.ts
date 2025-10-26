import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

// Sanfteres Psychedelisches Theme mit weniger aggressiven Farben
const psychedelicTheme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#f0e6ff",
      100: "#d9b3ff",
      200: "#c280ff",
      300: "#ab4dff",
      400: "#941aff",
      500: "#7c00e6", // Sanftes Lila statt aggressives Rot
      600: "#6600cc",
      700: "#5000b3",
      800: "#3a0099",
      900: "#240080",
    },
    secondary: {
      50: "#e6f7ff",
      100: "#b3e6ff",
      200: "#80d4ff",
      300: "#4dc3ff",
      400: "#1ab1ff",
      500: "#00a0e6", // Cyan-Blau
      600: "#0088cc",
      700: "#0070b3",
      800: "#005899",
      900: "#004080",
    },
    accent: {
      50: "#fff0e6",
      100: "#ffd6b3",
      200: "#ffbc80",
      300: "#ffa24d",
      400: "#ff881a",
      500: "#e67300", // Warmes Orange
      600: "#cc6600",
      700: "#b35900",
      800: "#994d00",
      900: "#804000",
    },
    neon: {
      pink: "#ff6b9d",
      cyan: "#00f5ff",
      lime: "#39ff14",
      purple: "#bf00ff",
      orange: "#ff7f00",
    },
    glass: {
      light: "rgba(255, 255, 255, 0.1)",
      medium: "rgba(255, 255, 255, 0.15)",
      dark: "rgba(0, 0, 0, 0.3)",
    },
  },
  fonts: {
    heading: "'Orbitron', 'Arial', sans-serif",
    body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Heading: {
      variants: {
        psychedelic: {
          background: "linear-gradient(45deg, #7c00e6, #00a0e6, #e67300)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "800",
          fontFamily: "'Orbitron', sans-serif",
        },
        neon: {
          color: "white",
          textShadow: "0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff",
          fontFamily: "'Orbitron', sans-serif",
        },
      },
    },
    Text: {
      variants: {
        glow: {
          textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
        },
        neon: {
          color: "#00f5ff",
          textShadow: "0 0 10px #00f5ff",
        },
      },
    },
    Button: {
      variants: {
        psychedelic: {
          bg: "linear-gradient(45deg, #7c00e6, #00a0e6)",
          color: "white",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          _hover: {
            transform: "translateY(-3px) scale(1.05)",
            boxShadow: "0 15px 30px rgba(124, 0, 230, 0.4)",
            bg: "linear-gradient(45deg, #8b00ff, #00b4ff)",
          },
          _active: {
            transform: "translateY(-1px) scale(1.02)",
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          _hover: {
            bg: "rgba(255, 255, 255, 0.2)",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(0, 245, 255, 0.2)",
          },
        },
      },
    },
    Card: {
      variants: {
        glass: {
          bg: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          overflow: "hidden",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        minHeight: "100vh",
      },
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(124, 0, 230, 0.5) transparent",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(45deg, #7c00e6, #00a0e6)",
        borderRadius: "4px",
        _hover: {
          background: "linear-gradient(45deg, #8b00ff, #00b4ff)",
        },
      },
    },
  },
});

export default psychedelicTheme;
