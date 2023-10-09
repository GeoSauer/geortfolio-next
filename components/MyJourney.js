import React, { Fragment } from "react";
import PageHeading from "./PageHeading";
import PageBody from "./PageBody";
import { Box, Link as ChakraLink, Flex, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import myData from "@/data";
import { color } from "framer-motion";

export default function MyJourney() {
  return (
    <>
      <PageHeading>My Journey.</PageHeading>
      <PageBody>
        <VStack maxWidth={"xl"} mx={"auto"} py={20}>
          {myData.experience.map((exp, idx) => (
            <Fragment key={idx}>
              <JourneyCard
                title={exp.title}
                company={exp.company}
                year={exp.year}
                companyUrl={exp.companyUrl}
                desc={exp.desc}
              />
              {idx === myData.experience.length - 1 ? null : (
                <Flex direction={"column"} alignItems={"center"} my={-2}>
                  {/* <Box
                    w={4}
                    h={4}
                    bg={myData.colors[2]}
                    rounded={"full"}
                    position={"relative"}
                    zIndex={10}
                  >
                    <Box
                      w={4}
                      h={4}
                      bg={myData.colors[2]}
                      rounded={"full"}
                      position={"relative"}
                      animation={"ping 1s ease-in-out infinite"}
                      zIndex={10}
                    /> */}
                  <Box w={1} h={24} rounded={"none"} bg={"gray.200"} />
                  {/* </Box> */}
                </Flex>
              )}
            </Fragment>
          ))}
        </VStack>
      </PageBody>
    </>
  );
}

const JourneyCard = ({ title, company, year, companyUrl, desc }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.400");
  const border = useColorModeValue("", "1px gray solid");
  return (
    <Box
      bg={bg}
      position={"relative"}
      p={4}
      border={border}
      rounded={"lg"}
      shadow={"xl"}
      mx={4}
      zIndex={10}
    >
      <Text
        as={"h1"}
        position={"absolute"}
        top={-12}
        left={{ md: -8 }}
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={color}
      >
        {year}
      </Text>
      <Text as={"h2"} fontWeight={"semibold"} fontSize={"xl"}>
        {title}
      </Text>
      <ChakraLink href={companyUrl} isExternal color={"gray.500"}>
        {company}
      </ChakraLink>
      {desc.map((line, idx) => (
        <Text key={idx} as={"p"} color={color} my={2}>
          {line}
        </Text>
      ))}
    </Box>
  );
};
