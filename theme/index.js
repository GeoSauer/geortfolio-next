const { extendTheme } = require("@chakra-ui/react");

import styles from "./styles";
import semanticTokens from "./semanticTokens";

const config = {
  initialColorMode: "system",
  useSystemColorMode: "true",
};

const theme = extendTheme({
  config,
  semanticTokens,
  styles,
});

export default theme;
