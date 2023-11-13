import theme from "@/theme";
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

type ChakraProps = {
  cookies: string | undefined;
  children: React.ReactNode;
};

export default function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};
