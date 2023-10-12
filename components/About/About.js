import myData from "@/data";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import AboutUnderline from "../RoughNotation/AboutUnderline";
import PageHeading from "../Layout/PageHeading";
import PageBody from "../Layout/PageBody";
import CustomLink from "../Custom/CustomLink";
import CustomImage from "../Custom/CustomImage";

const subheaderStyles = {
  fontSize: "3xl",
  fontWeight: "semibold",
  color: myData.colors[0],
  mb: -4,
};

export default function About() {
  return (
    <>
      <PageHeading>About me</PageHeading>

      <PageBody>
        <Text
          as={"p"}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={"semibold"}
          px={{ base: 8, md: 0 }}
        >
          {myData.about.title} Currently working on{" "}
          <CustomLink href={myData.about.currentProjectUrl} target="_blank">
            <AboutUnderline color={myData.colors[0]}>{myData.about.currentProject}</AboutUnderline>
          </CustomLink>
        </Text>

        <Container maxWidth={"6xl"} pt={20}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Text as="h2" sx={subheaderStyles}>
                Where I&apos;ve been.
              </Text>
              <Text fontSize={"2xl"} py={5}>
                {myData.about.desc[0]}
              </Text>
            </Box>
            <Box>
              <Text as="h2" sx={subheaderStyles}>
                What I&apos;m doing.
              </Text>
              <Text fontSize={"2xl"} py={5}>
                {myData.about.desc[1]}
              </Text>
            </Box>
            <Box>
              <Text as="h2" sx={subheaderStyles}>
                What I hope to do.
              </Text>
              <Text fontSize={"2xl"} py={5}>
                {myData.about.desc[2]}
              </Text>
            </Box>
          </SimpleGrid>

          <Text as="h1" textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"} py={10}>
            Tech Stack
          </Text>
          <SimpleGrid
            columns={{ base: 3, md: 5 }}
            spacingY={{ base: 5, md: 20 }}
            justifyItems={"center"}
          >
            {myData.about.techStack?.map((tech, idx) => (
              <CustomImage key={idx} src={tech.imageUrl} alt={tech.name} width={80} height={80} />
            ))}
          </SimpleGrid>
        </Container>
      </PageBody>
    </>
  );
}
