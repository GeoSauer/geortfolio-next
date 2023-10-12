import React, { Fragment } from "react";
import PageHeading from "./PageHeading";
import PageBody from "./PageBody";
import { SimpleGrid, Link as ChakraLink, Box, Text } from "@chakra-ui/react";
import myData from "@/data";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <PageHeading>Projects.</PageHeading>

      <PageBody>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} pt={{ md: 10 }}>
          {myData.projects?.map((project, idx) => (
            <Fragment key={idx}>
              <ChakraLink href={project.link} isExternal>
                <Box
                  position={"relative"}
                  overflow={"hidden"}
                  shadow={"2xl"}
                  width={"full"}
                  height={{ base: "26vh", md: "xs" }}
                  rounded={{ md: "lg" }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
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
                  <Text
                    as="h1"
                    fontSize={"2xl"}
                    fontWeight={"semibold"}
                    color={"white"}
                    position={"absolute"}
                    // ml={{ base: 2, md: -3 }}
                    // top={-6}
                    bottom={5}
                    right={5}
                    bg={myData.colors[1]}
                    rounded={"lg"}
                    px={2}
                  >
                    {project.title}
                  </Text>
                </Box>
              </ChakraLink>
            </Fragment>
          ))}
        </SimpleGrid>
      </PageBody>
    </>
  );
}
