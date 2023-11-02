import { Fragment } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import myData from "@/data";
import JourneyCard from "./JourneyCard";

export default function MyJourney() {
  let previousYear = null;

  return (
    <VStack maxWidth={"xl"} mx={"auto"} pt={20}>
      {myData.experience.map((exp, idx, arr) => {
        const showYear = exp.year !== previousYear;
        previousYear = exp.year;

        return (
          <Fragment key={exp.desc}>
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
