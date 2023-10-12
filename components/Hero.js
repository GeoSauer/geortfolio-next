import { Box, Flex, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import NextImage from "next/image";
import avatar from "../public/avatar.png";
import myData from "@/data";

export default function Hero() {
  const color = useColorModeValue("gray.700");
  const headingStyles = { fontSize: { base: "4xl", md: "8xl" } };

  return (
    <HStack as={"section"} role="hero" justify={"center"} align={"start"} overflow={"hidden"}>
      <Flex
        direction={"column"}
        width={{ base: "full", md: "60vw" }}
        marginX={"auto"}
        align={"stretch"}
        textAlign={{ base: "center", md: "left" }}
        color={color}
        p={{ md: 20 }}
        mx={{ md: 20 }}
      >
        <RoughNotationGroup show={true}>
          {myData.descriptors?.map((text, idx) => (
            <RainbowHighlight key={idx} color={myData.colors[idx]}>
              <Heading sx={headingStyles}>{text}</Heading>
            </RainbowHighlight>
          ))}
        </RoughNotationGroup>
      </Flex>

      <Box
        display={{ base: "none", md: "block" }}
        width={"40vw"}
        maxW={"xl"}
        mr={8}
        position={"relative"}
        marginTop={20}
      >
        <NextImage
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
