import SuperDarkModeProvider from "@/providers/SuperDarkModeProvider";
import "@/styles/globals.css";
import { Chakra } from "@/providers/Chakra";

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SuperDarkModeProvider>
        <Component {...pageProps} />
      </SuperDarkModeProvider>
    </Chakra>
  );
}
