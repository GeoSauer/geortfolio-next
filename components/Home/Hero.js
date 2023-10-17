import { Box, Flex, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { RoughNotationGroup } from "react-rough-notation";
import HeroHighlight from "../RoughNotation/HeroHighlight";
import avatar from "@/public/avatar.png";
import myData from "@/data";
import CustomImage from "../Custom/CustomImage";

export default function Hero() {
  const color = useColorModeValue("gray.700");
  const headingStyles = { fontSize: { base: "4xl", md: "8xl" } };

  return (
    <HStack
      as={"section"}
      role="hero"
      // justify={"center"}
      align={"start"}
      // overflow={"hidden"}
      mt={{ base: -145, md: -350 }}
    >
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
            <HeroHighlight key={idx} color={myData.colors[idx]}>
              <Heading sx={headingStyles}>{text}</Heading>
            </HeroHighlight>
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
        <CustomImage src={avatar} alt="A photo of Geo" priority rounded={"full"} />
      </Box>
    </HStack>
  );
}
