const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
  semanticTokens: {
    colors: {
      bgPrimary: {
        default: "",
        _dark: "",
      },
      bgSecondary: {
        default: "",
        _dark: "",
      },
    },
  },
});

export default theme;
