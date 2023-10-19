const { extendTheme } = require("@chakra-ui/react");

const config = {
  initialColorMode: "system",
  useSystemColorMode: "true",
};

const semanticTokens = {
  colors: {
    bgPrimary: {
      default: "purple.100",
      _dark: "rgb(0,33,43)",
    },
    bgSecondary: {
      default: "purple.50",
      _dark: "rgb(0,43,53)",
    },
  },
};

const styles = {
  global: {
    main: {
      width: "full",
      bg: "bgSecondary",
    },
  },
};

const theme = extendTheme({
  config,
  semanticTokens,
  styles,
});

export default theme;
