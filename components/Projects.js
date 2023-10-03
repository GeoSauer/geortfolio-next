import React from "react";
import PageHeading from "./PageHeading";
import PageBody from "./PageBody";
import { SimpleGrid, Link as ChakraLink, Box } from "@chakra-ui/react";
import myData from "@/data";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <PageHeading>Projects.</PageHeading>

      <PageBody>
        <SimpleGrid columns={{ base: 1, md: 2 }} pb={20} gap={8}>
          {myData.projects?.map((project, idx) => (
            <ChakraLink key={idx} href={project.link} isExternal>
              <Box
                position={"relative"}
                overflow={"hidden"}
                shadow={"2xl"}
                width={"full"}
                height={"25vh"}
                rounded={{ md: "lg" }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transform: "scale(1)",
                    transition: "transform 2s ease-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.25)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </Box>
            </ChakraLink>
          ))}
        </SimpleGrid>
      </PageBody>
    </>
  );
}
