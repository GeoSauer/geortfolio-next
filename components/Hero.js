import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import myData from "@/data";

export default function Hero() {
  const colors = ["#F4743B", "#55c1FF", "#5438DC", "#32E875"];

  return (
    <Flex direction={"row"} justify={"space-evenly"}>
      <Flex direction={"column"} width={"30vw"}>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <Heading>Geo</Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <Heading>Is</Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <Heading>So</Heading>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <Heading>Cool</Heading>
          </RainbowHighlight>
        </RoughNotationGroup>
      </Flex>
      <Flex>
        <Image src={myData.avatarUrl} alt="A photo of Geo" width={"120"} height={"120"} />
      </Flex>
    </Flex>
  );
}
