import myData from "@/data";
import { Box, Container, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RainbowUnderline } from "./RainbowUnderline";
import { RoughNotationGroup } from "react-rough-notation";

export default function About() {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box as="section" bg={bg}>
      <Container maxWidth={"6xl"}>
        <Heading fontSize={{ base: "6xl", md: "9xl" }} mb={{ base: 20, md: 5 }}>
          About me.
        </Heading>
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
    </Box>
  );
}
