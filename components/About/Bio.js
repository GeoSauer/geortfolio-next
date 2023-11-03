import myData from "/data";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

const subheaderStyles = {
  fontSize: "3xl",
  fontWeight: "semibold",
  color: myData.colors[0],
  mb: -4,
  paddingBottom: 10,
};

export default function Bio() {
  return (
    <Container maxWidth={"6xl"} py={20}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} color="textSecondary">
        {myData.about.desc.map((paragraph) => (
          <Box key={paragraph.title}>
            <Text as="h2" sx={subheaderStyles}>
              {paragraph.title}
            </Text>

            {paragraph.body.map((sentence) => (
              <Text key={sentence} fontSize="2xl" paddingBottom={2}>
                {sentence}
              </Text>
            ))}
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
