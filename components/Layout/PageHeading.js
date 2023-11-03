import myData from "/data";
import { Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PageHeading({ children }) {
  const router = useRouter();

  let color = null;
  switch (router.asPath) {
    case "/about":
      color = myData.colors[0];
      break;
    case "/projects":
      color = myData.colors[1];
      break;
    case "/my-journey":
      color = myData.colors[2];
      break;
    case "/contact":
      color = myData.colors[3];
  }

  return (
    <Container maxWidth={"6xl"} h={48}>
      <Heading
        fontSize={{ base: "6xl", md: "9xl" }}
        mb={{ base: 20, md: 5 }}
        textAlign={{ base: "center", md: "left" }}
        py={{ base: 5, md: 20 }}
        color={color}
      >
        {children}
      </Heading>
    </Container>
  );
}
