const { extendTheme } = require("@chakra-ui/react");

import styles from "./styles";
import semanticTokens from "./semanticTokens";
import fonts from "./fonts";

const config = {
  initialColorMode: "system",
  useSystemColorMode: "true",
};

const theme = extendTheme({
  config,
  semanticTokens,
  styles,
  fonts,
});

export default theme;
