import myData from "/data";
import { Box, Container, Flex, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import CustomLink from "../Links/CustomLink";

export default function FeaturedProject() {
  const color = useColorModeValue("white", "gray.500");
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box as="section" marginTop={{ base: -40, md: -60 }} bg={bg}>
      <Container maxWidth={"6xl"} px={0}>
        <Flex
          as={"header"}
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          alignItems={"center"}
          paddingTop={60}
          mx={10}
          my={{ md: 20, lg: 0 }}
        >
          <Heading
            as={"h1"}
            color={color}
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 10, md: "-35px" }}
          >
            Featured Project
          </Heading>

          <CustomLink href="/projects">
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
              <Text
                transform={"translateX(0)"}
                transition={"transform 0.3s ease"}
                _hover={{
                  transform: "translateX(2px)",
                }}
              >
                View All &rarr;
              </Text>
            </Box>
          </CustomLink>
        </Flex>

        <Container pb={40} px={0} maxW="5xl">
          <CustomLink href={myData.featuredProject.link} target="_blank">
            <Box
              position={"relative"}
              overflow={"hidden"}
              shadow={"2xl"}
              width={"full"}
              height={{ base: "26vh", md: "xl" }}
              rounded={{ md: "lg" }}
            >
              <Image
                src={myData.featuredProject.imageUrl}
                alt={myData.featuredProject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw"
                style={{
                  marginTop: "-1px",
                  objectFit: "cover",
                  transform: "scale(1)",
                  transition: "transform 2s ease-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </Box>
          </CustomLink>
        </Container>
      </Container>
    </Box>
  );
}
