import Head from "next/head";
import { AppProps } from "next/app";
import Chakra from "@/providers/Chakra";
import SuperDarkModeProvider from "@/providers/SuperDarkModeProvider";

interface MyPageProps extends AppProps {
  pageProps: {
    cookies: string | undefined;
  };
}

export default function App({ Component, pageProps }: MyPageProps) {
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
