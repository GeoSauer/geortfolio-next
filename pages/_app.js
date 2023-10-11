import SuperDarkModeProvider from "@/providers/SuperDarkModeProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SuperDarkModeProvider>
        <Component {...pageProps} />
      </SuperDarkModeProvider>
    </ChakraProvider>
  );
}
