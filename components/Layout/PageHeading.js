import { Container, Heading } from "@chakra-ui/react";

export default function PageHeading({ children }) {
  return (
    <Container maxWidth={"6xl"} h={48}>
      <Heading
        fontSize={{ base: "6xl", md: "9xl" }}
        mb={{ base: 20, md: 5 }}
        textAlign={{ base: "center", md: "left" }}
        py={{ base: 5, md: 20 }}
      >
        {children}
      </Heading>
    </Container>
  );
}
