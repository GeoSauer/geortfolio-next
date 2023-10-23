import myData from "@/data";
import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";
import AboutUnderline from "../RoughNotation/AboutUnderline";
import CustomLink from "../Custom/CustomLink";
import TechStack from "./TechStack";

const subheaderStyles = {
  fontSize: "3xl",
  fontWeight: "semibold",
  color: myData.colors[0],
  mb: -4,
  paddingBottom: 10,
};

export default function About() {
  return (
    <>
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} color="textSecondary">
          <Box>
            <Text as="h2" sx={subheaderStyles}>
              Where I&apos;ve been.
            </Text>
            {myData.about.desc[0].map((sentence, idx) => (
              <Text key={idx} fontSize={"2xl"} paddingBottom={2}>
                {sentence}
              </Text>
            ))}
          </Box>
          <Box>
            <Text as="h2" sx={subheaderStyles}>
              What I&apos;m doing.
            </Text>
            {myData.about.desc[1].map((sentence, idx) => (
              <Text key={idx} fontSize={"2xl"} paddingBottom={2}>
                {sentence}
              </Text>
            ))}
          </Box>
          <Box>
            <Text as="h2" sx={subheaderStyles}>
              What I hope to do.
            </Text>
            {myData.about.desc[2].map((sentence, idx) => (
              <Text key={idx} fontSize={"2xl"} paddingBottom={2}>
                {sentence}
              </Text>
            ))}
          </Box>
        </SimpleGrid>
      </Container>

      <TechStack />
    </>
  );
}
