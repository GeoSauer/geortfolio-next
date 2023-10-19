const { extendTheme } = require("@chakra-ui/react");

const config = {
  initialColorMode: "system",
  useSystemColorMode: "true",
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      bgPrimary: {
        default: "pink",
        _dark: "red",
      },
      bgSecondary: {
        default: "teal",
        _dark: "blue",
      },
    },
  },
});

export default theme;
