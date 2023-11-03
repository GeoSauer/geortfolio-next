import myData from "/data";
import { AspectRatio, Box, Container, Flex, Heading } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";
import CustomImage from "../Custom/CustomImage";
import ViewMoreLink from "./ViewMoreLink";

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

          <ViewMoreLink href="/projects" whiteSpace={"nowrap"} destination="View All &rarr;" />
        </Flex>

        <Container px={0} maxW="5xl">
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
