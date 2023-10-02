import myData from "@/data";
import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { RainbowUnderline } from "./RainbowUnderline";
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

export default function About() {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Container maxWidth={"6xl"} h={48}>
        <Heading
          fontSize={{ base: "6xl", md: "9xl" }}
          mb={{ base: 20, md: 5 }}
          textAlign={{ base: "center", md: "left" }}
          py={{ base: 5, md: 20 }}
        >
          About me.
        </Heading>
      </Container>

      <Box bg={bg} mt={{ base: -20, md: -5 }}>
        <Container maxWidth={"6xl"} pt={20}>
          <Text as={"p"} fontSize={{ base: "3xl", md: "4xl" }} fontWeight={"semibold"}>
            {myData.about.title} Currently working on{" "}
            <Link
              _hover={{
                textDecoration: "none",
              }}
            >
              <RoughNotationGroup show={true}>
                <RainbowUnderline color={myData.colors[0]}>
                  {myData.about.currentProject}
                </RainbowUnderline>
              </RoughNotationGroup>
            </Link>
          </Text>
        </Container>

        <Container maxWidth={"5xl"} pt={20}>
          {myData.about.desc?.map((desc, idx) => (
            <Text key={idx} fontSize={"2xl"} py={5}>
              {desc}
            </Text>
          ))}
        </Container>

        <Container maxWidth={"5xl"} pt={20}>
          <Text as="h1" textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"} py={10}>
            Tech Stack
          </Text>
          <SimpleGrid
            columns={{ base: 3, md: 5 }}
            spacingY={{ base: 5, md: 20 }}
            justifyItems={"center"}
            pb={20}
          >
            {myData.about.techStack?.map((tech, idx) => (
              <Image key={idx} src={tech.imageUrl} alt={tech.name} width={80} height={80} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
