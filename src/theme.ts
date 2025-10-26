import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

// Alanotronix Theme - Netflix/Disney+ inspired
const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#e8f4ff",
      100: "#b8deff",
      200: "#87c9ff",
      300: "#56b3ff",
      400: "#259eff",
      500: "#0088ff", // Primary Alanotronix Blue
      600: "#006dd4",
      700: "#0052a3",
      800: "#003672",
      900: "#001b41",
    },
    accent: {
      50: "#fff5e6",
      100: "#ffe0b3",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa21a",
      500: "#ff8c00", // Warm Orange
      600: "#e67e00",
      700: "#cc7000",
      800: "#b36200",
      900: "#995400",
    },
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#1a1a1a", // Darker for Netflix feel
      800: "#111111",
      900: "#000000",
    },
    success: "#00d4aa",
    warning: "#ffb020",
    error: "#ff6b6b",
  },
  fonts: {
    heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "8px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(0, 136, 255, 0.3)",
          },
          _active: {
            transform: "translateY(0)",
            boxShadow: "0 5px 15px rgba(0, 136, 255, 0.2)",
          },
        },
        secondary: {
          bg: "accent.500",
          color: "white",
          _hover: {
            bg: "accent.600",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(255, 140, 0, 0.3)",
          },
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          _hover: {
            bg: "rgba(255, 255, 255, 0.2)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        _hover: {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0, 136, 255, 0.5) transparent",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(0, 136, 255, 0.5)",
        borderRadius: "4px",
        _hover: {
          background: "rgba(0, 136, 255, 0.7)",
        },
      },
    },
  },
});

export default theme;
