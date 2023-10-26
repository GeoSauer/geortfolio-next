import { Box, Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

export default function JourneyCard({ title, company, year, companyUrl, desc }) {
  return (
    <Box bg="cardBG" position={"relative"} p={4} rounded={"lg"} shadow={"xl"} mx={4} zIndex={10}>
      <Text
        as={"h1"}
        position={"absolute"}
        top={-12}
        left={{ md: -8 }}
        fontSize={"4xl"}
        fontWeight={"bold"}
        color="cardText"
      >
        {year}
      </Text>
      <Text as={"h2"} fontWeight={"semibold"} fontSize={"xl"}>
        {title}
      </Text>
      {companyUrl ? (
        <CustomLink href={companyUrl} target="_blank" color="textSecondary">
          {company}
        </CustomLink>
      ) : (
        <Text color="textSecondary">{company}</Text>
      )}
      {desc.map((line) => (
        <Text key={line} as={"p"} color="cardText" my={2}>
          {line}
        </Text>
      ))}
    </Box>
  );
}
