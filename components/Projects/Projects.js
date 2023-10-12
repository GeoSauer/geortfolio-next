import { Fragment } from "react";
import PageHeading from "../Layout/PageHeading";
import PageBody from "../Layout/PageBody";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import myData from "@/data";
import CustomLink from "../Custom/CustomLink";
import CustomImage from "../Custom/CustomImage";

export default function Projects() {
  return (
    <>
      <PageHeading>Projects</PageHeading>

      <PageBody>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} pt={{ md: 10 }}>
          {myData.projects?.map((project, idx) => (
            <Fragment key={idx}>
              <CustomLink href={project.link} target="_blank">
                <Box
                  position={"relative"}
                  overflow={"hidden"}
                  shadow={"2xl"}
                  width={"full"}
                  height={{ base: "26vh", md: "xs" }}
                  rounded={{ md: "lg" }}
                >
                  <CustomImage
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  />
                  <Text
                    as="h1"
                    fontSize={"2xl"}
                    fontWeight={"semibold"}
                    color={"white"}
                    position={"absolute"}
                    bottom={5}
                    right={5}
                    bg={myData.colors[1]}
                    rounded={"lg"}
                    px={2}
                  >
                    {project.title}
                  </Text>
                </Box>
              </CustomLink>
            </Fragment>
          ))}
        </SimpleGrid>
      </PageBody>
    </>
  );
}
