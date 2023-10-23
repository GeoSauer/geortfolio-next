import myData from "/data";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";
import CustomImage from "../Custom/CustomImage";

export default function FeaturedProject() {
  return (
    <Box as="section" marginTop={{ base: -40, md: -60 }}>
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
            color="title"
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 10, md: "-35px" }}
          >
            Featured Project
          </Heading>

          <CustomLink
            href="/projects"
            marginBottom={{ base: 20, md: 0 }}
            px={8}
            py={4}
            rounded={"md"}
            bg="button"
            color="buttonText"
            shadow={"xl"}
            alignItems={"center"}
            whiteSpace={"nowrap"}
            _hover={{
              "& .hover": {
                transform: "translateX(2px)",
              },
            }}
          >
            <Text
              className="hover"
              fontSize={"xl"}
              fontWeight={"bold"}
              transform={"translateX(0)"}
              transition={"transform 0.3s ease"}
            >
              View All &rarr;
            </Text>
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
              <CustomImage
                src={myData.featuredProject.imageUrl}
                alt={myData.featuredProject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw"
              />
            </Box>
          </CustomLink>
        </Container>
      </Container>
    </Box>
  );
}
