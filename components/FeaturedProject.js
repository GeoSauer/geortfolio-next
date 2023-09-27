import myData from "@/data";
import { Box, Container, Flex, Heading, Link as ChakraLink, Grid } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export default function FeaturedProject() {
  return (
    <Box marginTop={-40} _dark={{ backgroundColor: "gray.900" }} bg={"gray.100"}>
      <Container maxWidth={"6xl"} px={0}>
        <Flex
          as={"header"}
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          alignItems={"center"}
          paddingTop={40}
          mx={10}
          my={{ md: 20, lg: 0 }}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 20, md: "-15px" }}
          >
            Featured Project
          </Heading>

          <NextLink href="/projects">
            <Box
              marginBottom={{ base: 20, md: 0 }}
              px={8}
              py={4}
              rounded={"md"}
              bg={"white"}
              shadow={"lg"}
              fontSize={"xl"}
              fontWeight={"semibold"}
              color={"gray.700"}
              alignItems={"center"}
              whiteSpace={"nowrap"}
            >
              View All &rarr;
            </Box>
          </NextLink>
        </Flex>

        <Container pb={40} px={0} maxW="6xl">
          <ChakraLink href={myData.featuredProject.link} isExternal>
            <Box
              position={"relative"}
              overflow={"hidden"}
              shadow={"2xl"}
              width={"full"}
              height={"55vh"}
              objectFit={"cover"}
            >
              <Image
                src={myData.featuredProject.imageUrl}
                alt={myData.featuredProject.title}
                fill
                style={{
                  transform: "scale(1)",
                  transition: "transform 2000ms ease-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                position={"absolute"}
                top={{ base: 5, md: 10 }}
                right={{ base: 5, md: 10 }}
                rounded={"md"}
                px={2}
                background={"blue.100"}
                opacity={0.9}
              >
                {myData.featuredProject.title}
              </Heading>
            </Box>
          </ChakraLink>
        </Container>
      </Container>
    </Box>
  );
}
