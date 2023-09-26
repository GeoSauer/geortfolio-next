import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import avatar from "../public/avatar.png";

export default function Hero() {
  const colors = ["#F4743B", "#55c1FF", "#5438DC", "#32E875"];

  return (
    <HStack justify={"center"} justifyItems={"start"} overflow={"hidden"}>
      <Flex
        direction={"column"}
        align={"stretch"}
        width={{ base: "full", md: "50vw" }}
        padding={{ md: "80px" }}
        marginX={"auto"}
        // marginTop={"-100px"}
        textAlign={{ base: "center", md: "left" }}
      >
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <Heading fontSize={{ base: "4xl", md: "80px" }} my={2}>
              Geo
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <Heading fontSize={{ base: "4xl", md: "8xl" }} my={2}>
              Is
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <Heading fontSize={{ base: "4xl", md: "8xl" }} my={2}>
              So
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <Heading fontSize={{ base: "4xl", md: "8xl" }} my={2}>
              Cool
            </Heading>
          </RainbowHighlight>
        </RoughNotationGroup>
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        width={{ md: "50vw" }}
        marginRight={-40}
        marginTop={20}
      >
        <Box width={{ md: "75vw" }}>
          <Image
            src={avatar}
            alt="A photo of Geo"
            sizes="25vw"
            style={{ width: "50%", height: "auto" }}
          />
        </Box>
      </Box>
    </HStack>
  );
}
