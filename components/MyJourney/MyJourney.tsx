import { Fragment } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import JourneyCard from "./JourneyCard";
import myData from "@/data";

export default function MyJourney() {
  let previousYear = "";

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
              year={showYear ? exp.year : ""}
              companyUrl={exp.companyUrl}
              desc={exp.desc}
            />
            {idx === arr.length - 1 ? null : (
              <Flex direction={"column"} alignItems={"center"} my={-2}>
                <Box
                  w={4}
                  h={4}
                  bg="accentPurple"
                  rounded={"full"}
                  zIndex={10}
                  mt={-2}
                  aria-hidden="true"
                />
                <Box w={1} h={24} rounded={"none"} bg="accentPurple" aria-hidden="true" />
              </Flex>
            )}
          </Fragment>
        );
      })}
    </VStack>
  );
}
