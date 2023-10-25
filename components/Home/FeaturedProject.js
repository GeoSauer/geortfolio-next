import myData from "/data";
import { AspectRatio, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";
import CustomImage from "../Custom/CustomImage";

export default function FeaturedProject() {
  return (
    <Box as="section" marginTop={-20}>
      <Container maxWidth={"6xl"} px={0}>
        <Flex
          as={"header"}
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
          paddingTop={60}
          mx={{ base: 2, md: 10 }}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={"left"}
            mb={{ md: "-35px" }}
            color="title"
          >
            Featured Project
          </Heading>

          <CustomLink
            href="/projects"
            px={{ base: 2, md: 6 }}
            py={{ base: 2, md: 4 }}
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
              fontSize={{ base: "md", md: "xl" }}
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
            <AspectRatio ratio={16 / 9}>
              <CustomImage
                src={myData.featuredProject.imageUrl}
                alt={myData.featuredProject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw"
                rounded={{ base: "none", lg: "lg" }}
              />
            </AspectRatio>
          </CustomLink>
        </Container>
      </Container>
    </Box>
  );
}
