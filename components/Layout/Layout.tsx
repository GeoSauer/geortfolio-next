import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageBody from "./PageBody";
import PageHeading from "./PageHeading";
import { Analytics } from "@vercel/analytics/react";
import { Link as ChakraLink } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
  heading?: string;
};

export default function Layout({ children, heading }: LayoutProps) {
  return (
    <>
      <ChakraLink
        href="#main-content"
        position="absolute"
        top={0}
        left="-10000px"
        zIndex={1000}
        bg="button"
        color="buttonText"
        px={4}
        py={2}
        _focus={{
          left: 4,
          top: 4,
          outline: "3px solid",
          outlineColor: "accentBlue",
          outlineOffset: "2px",
        }}
      >
        Skip to main content
      </ChakraLink>
      <Navbar />
      <main id="main-content">
        {heading && <PageHeading>{heading}</PageHeading>}
        <PageBody hasPageHeading={Boolean(heading)}>{children}</PageBody>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
