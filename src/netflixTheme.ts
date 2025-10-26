import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const netflixTheme = extendTheme({
  config,
  colors: {
    netflix: {
      primary: "#E50914", // Netflix Red
      secondary: "#B81D24", // Darker Red
      dark: "#000000", // Pure Black
      gray: "#141414", // Dark Gray
      lightGray: "#2A2A2A", // Medium Gray
      text: "#FFFFFF", // White Text
      muted: "#B3B3B3", // Muted Gray
      accent: "#46D369", // Success Green
    },
    brand: {
      50: "#FFE5E7",
      100: "#FFB3B8",
      200: "#FF8089",
      300: "#FF4D5A",
      400: "#FF1A2B",
      500: "#E50914",
      600: "#B8070F",
      700: "#8B050B",
      800: "#5E0407",
      900: "#310204",
    },
    gray: {
      50: "#F7F7F7",
      100: "#E1E1E1",
      200: "#CFCFCF",
      300: "#B1B1B1",
      400: "#9E9E9E",
      500: "#7E7E7E",
      600: "#626262",
      700: "#515151",
      800: "#3B3B3B",
      900: "#222222",
    },
  },
  fonts: {
    heading: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#000000",
        color: "#FFFFFF",
        fontFamily: "body",
        overflow: "auto",
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#141414",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#E50914",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#B81D24",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "4px",
        textTransform: "none",
        transition: "all 0.2s ease",
        _hover: {
          transform: "scale(1.02)",
        },
        _active: {
          transform: "scale(0.98)",
        },
      },
      variants: {
        netflix: {
          bg: "#E50914",
          color: "white",
          _hover: {
            bg: "#B81D24",
          },
        },
        secondary: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "#B3B3B3",
          color: "#B3B3B3",
          _hover: {
            bg: "#B3B3B3",
            color: "black",
          },
        },
        ghost: {
          bg: "transparent",
          color: "white",
          _hover: {
            bg: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
      defaultProps: {
        variant: "netflix",
      },
    },
    Card: {
      baseStyle: {
        bg: "#141414",
        border: "none",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        _hover: {
          transform: "scale(1.05)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8)",
          zIndex: 10,
        },
      },
    },
    Box: {
      baseStyle: {
        transition: "all 0.3s ease",
      },
    },
    Input: {
      variants: {
        netflix: {
          field: {
            bg: "#2A2A2A",
            border: "1px solid #515151",
            borderRadius: "4px",
            color: "white",
            _placeholder: {
              color: "#B3B3B3",
            },
            _focus: {
              borderColor: "#E50914",
              boxShadow: "0 0 0 1px #E50914",
            },
          },
        },
      },
      defaultProps: {
        variant: "netflix",
      },
    },
    Text: {
      baseStyle: {
        color: "white",
      },
      variants: {
        subtitle: {
          color: "#B3B3B3",
          fontSize: "sm",
        },
        accent: {
          color: "#E50914",
          fontWeight: "600",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "white",
        fontWeight: "700",
      },
      variants: {
        netflix: {
          color: "#E50914",
          fontWeight: "700",
        },
        hero: {
          fontSize: { base: "2xl", md: "4xl", lg: "5xl" },
          fontWeight: "800",
          letterSpacing: "tight",
          lineHeight: "1.1",
        },
        section: {
          fontSize: { base: "lg", md: "xl", lg: "2xl" },
          fontWeight: "600",
          marginBottom: "4",
        },
      },
    },
  },
});

export default netflixTheme;
