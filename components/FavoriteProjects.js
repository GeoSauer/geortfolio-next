import myData from "@/data";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export default function FavoriteProjects() {
  return (
    <Container marginTop={-40}>
      <Box marginX={"auto"} maxWidth={"6xl"}>
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
          >
            Favorite Projects
          </Heading>
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
          >
            <NextLink href="/projects">View All</NextLink>
          </Box>
        </Flex>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          height={"500px"}
        >
          <GridItem colSpan={2} rowSpan={1} bg={"red"}>
            <ChakraLink
              href={myData.projects[0].link}
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box position={"relative"} overflow={"hidden"}>
                <Image
                  src={myData.projects[0].imageUrl}
                  alt={myData.projects[0].title}
                  width={600}
                  height={200}
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
                <Heading as={"h1"} position={"absolute"} top={10} left={10} rounded={"md"} px={2}>
                  {myData.projects[0].title}
                </Heading>
              </Box>
            </ChakraLink>
          </GridItem>
          <GridItem colSpan={1} bg={"blue"}>
            <ChakraLink
              href={myData.projects[1].link}
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box position={"relative"} overflow={"hidden"}>
                <Image
                  src={myData.projects[1].imageUrl}
                  alt={myData.projects[1].title}
                  width={300}
                  height={200}
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
                <Heading as={"h1"} position={"absolute"} top={10} left={10} rounded={"md"} px={2}>
                  {myData.projects[1].title}
                </Heading>
              </Box>
            </ChakraLink>
          </GridItem>
          <GridItem colSpan={1} bg={"green"}>
            <ChakraLink
              href={myData.projects[2].link}
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box position={"relative"} overflow={"hidden"}>
                <Image
                  src={myData.projects[2].imageUrl}
                  alt={myData.projects[2].title}
                  width={300}
                  height={200}
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
                <Heading as={"h1"} position={"absolute"} top={10} left={10} rounded={"md"} px={2}>
                  {myData.projects[2].title}
                </Heading>
              </Box>
            </ChakraLink>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
