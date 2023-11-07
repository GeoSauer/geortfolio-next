import theme from "@/theme";
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";

export default function Chakra({ cookies, children }) {
  console.log({ cookies });
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
