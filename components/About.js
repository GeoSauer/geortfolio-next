import myData from "@/data";
import { Container, Link as ChakraLink, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { RainbowUnderline } from "./RainbowUnderline";
import { RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";
import PageHeading from "./PageHeading";
import PageBody from "./PageBody";

export default function About() {
  return (
    <>
      <PageHeading>About me.</PageHeading>

      <PageBody>
        <Text
          as={"p"}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={"semibold"}
          px={{ base: 8, md: 0 }}
        >
          {myData.about.title} Currently working on{" "}
          <ChakraLink
            href={myData.about.currentProjectUrl}
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <RoughNotationGroup show={true}>
              <RainbowUnderline color={myData.colors[0]}>
                {myData.about.currentProject}
              </RainbowUnderline>
            </RoughNotationGroup>
          </ChakraLink>
        </Text>

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
          >
            {myData.about.techStack?.map((tech, idx) => (
              <Image key={idx} src={tech.imageUrl} alt={tech.name} width={80} height={80} />
            ))}
          </SimpleGrid>
        </Container>
      </PageBody>
    </>
  );
}
