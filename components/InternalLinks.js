import { Divider, HStack } from "@chakra-ui/react";
import React from "react";
import CustomLink from "./CustomLink";
import myData from "@/data";

export default function InternalLinks() {
  const dividerStyles = {
    borderWidth: "1px",
    height: 4,
    mx: { md: 3 },
  };

  return (
    <HStack>
      <CustomLink href="/about" activeColor={myData.colors[0]}>
        About
      </CustomLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <CustomLink href="/projects" activeColor={myData.colors[1]}>
        Projects
      </CustomLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <CustomLink href="/my-journey" activeColor={myData.colors[2]}>
        My Journey
      </CustomLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <CustomLink href="/contact" activeColor={myData.colors[3]}>
        Contact
      </CustomLink>
    </HStack>
  );
}
