import theme from "@/theme";
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";

export function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
