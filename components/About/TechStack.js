import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CustomImage from "../Custom/CustomImage";
import myData from "@/data";

export default function TechStack() {
  return (
    <>
      <Text as="h1" textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"} py={10}>
        Tech Stack
      </Text>
      <SimpleGrid
        columns={{ base: 3, md: 5 }}
        spacingY={{ base: 5, md: 20 }}
        justifyItems={"center"}
      >
        {myData.about.techStack?.map((tech, idx) => (
          <CustomImage key={idx} src={tech.imageUrl} alt={tech.name} width={100} height={100} />
        ))}
      </SimpleGrid>
    </>
  );
}
