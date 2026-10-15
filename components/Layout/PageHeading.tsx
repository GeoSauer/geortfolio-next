import { Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type PageHeadingProps = {
  children: ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  const router = useRouter();
  const pageColors: Record<string, string> = {
    "/about": "accentOrange",
    "/products": "accentBlue",
    "/my-journey": "accentPurple",
    "/contact": "accentGreen",
  };

  return (
    <Container maxWidth={"6xl"} h={48}>
      <Heading
        as="h1"
        fontSize={{ base: "6xl", md: "9xl" }}
        mb={{ base: 20, md: 5 }}
        textAlign={{ base: "center", md: "left" }}
        py={{ base: 5, md: 20 }}
        color={pageColors[router.asPath]}
      >
        {children}
      </Heading>
    </Container>
  );
}
