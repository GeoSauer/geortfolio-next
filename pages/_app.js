import SuperDarkModeProvider from "@/providers/SuperDarkModeProvider";
import { Chakra } from "@/providers/Chakra";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SuperDarkModeProvider>
        <Head>
          <title>{"Geo Sauer - Engineer, Sculptor, Maker, Nerd"}</title>
        </Head>
        <Component {...pageProps} />
      </SuperDarkModeProvider>
    </Chakra>
  );
}
