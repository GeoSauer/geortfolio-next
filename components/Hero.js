import { Box, Flex, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import avatar from "../public/avatar.png";
import myData from "@/data";

export default function Hero() {
  const color = useColorModeValue("gray.700");

  return (
    <HStack as={"section"} role="hero" justify={"center"} justifyItems={"start"}>
      <Flex
        direction={"column"}
        align={"stretch"}
        width={{ base: "full", md: "50vw" }}
        padding={{ md: "50px" }}
        px={{ md: "150px" }}
        pb={{ md: "280px" }}
        marginX={"auto"}
        textAlign={{ base: "center", md: "left" }}
        color={color}
      >
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={myData.colors[0]}>
            <Heading fontSize={{ base: "4xl", md: "80px" }} marginY={{ md: -3 }}>
              Engineer.
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={myData.colors[1]}>
            <Heading fontSize={{ base: "4xl", md: "80px" }} marginY={{ md: -3 }}>
              Sculptor.
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={myData.colors[2]}>
            <Heading fontSize={{ base: "4xl", md: "80px" }} marginY={{ md: -3 }}>
              Maker.
            </Heading>
          </RainbowHighlight>
          <RainbowHighlight color={myData.colors[3]}>
            <Heading fontSize={{ base: "4xl", md: "80px" }} marginY={{ md: -3 }}>
              Nerd.
            </Heading>
          </RainbowHighlight>
        </RoughNotationGroup>
      </Flex>

      <Box
        display={{ base: "none", md: "block" }}
        width={{ md: "42vw" }}
        marginRight={"70px"}
        marginTop={20}
      >
        <Image
          src={avatar}
          alt="A photo of Geo"
          priority
          style={{
            objectFit: "contain",
            transform: "scale(1)",
            transition: "transform 2s ease-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </Box>
    </HStack>
  );
}
