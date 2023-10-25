import { Fragment } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import myData from "@/data";
import CustomLink from "../Custom/CustomLink";

export default function MyJourney() {
  let previousYear = null;

  return (
    <VStack maxWidth={"xl"} mx={"auto"} pt={20}>
      {myData.experience.map((exp, idx, arr) => {
        const showYear = exp.year !== previousYear;
        previousYear = exp.year;

        return (
          <Fragment key={idx}>
            <JourneyCard
              title={exp.title}
              company={exp.company}
              year={showYear ? exp.year : null}
              companyUrl={exp.companyUrl}
              desc={exp.desc}
            />
            {idx === arr.length - 1 ? null : (
              <Flex direction={"column"} alignItems={"center"} my={-2}>
                <Box w={4} h={4} bg={myData.colors[2]} rounded={"full"} zIndex={10} mt={-2} />
                <Box w={1} h={24} rounded={"none"} bg={myData.colors[2]} />
              </Flex>
            )}
          </Fragment>
        );
      })}
    </VStack>
  );
}

const JourneyCard = ({ title, company, year, companyUrl, desc }) => {
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
      {desc.map((line, idx) => (
        <Text key={idx} as={"p"} color="cardText" my={2}>
          {line}
        </Text>
      ))}
    </Box>
  );
};
