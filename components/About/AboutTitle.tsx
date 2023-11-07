import { Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";
import Underline from "../RoughNotation/Underline";
import myData from "@/data";

export default function AboutTitle() {
  return (
    <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight={"semibold"} px={{ base: 8, md: 0 }}>
      {myData.about.title} Currently working on{" "}
      <CustomLink href={myData.about.currentProjectUrl} target="_blank" rel="noreferrer">
        <Underline color={myData.colors[0]}>{myData.about.currentProject}</Underline>
      </CustomLink>
    </Text>
  );
}
