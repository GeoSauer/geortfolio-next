import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import myData from "@/data";

export default function Projects() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} pt={{ md: 10 }}>
      {myData.projects?.map((project) => (
        <ProjectCard
          key={project.title}
          href={project.link}
          src={project.imageUrl}
          alt={project.title}
          // title={project.title}
          // color={myData.colors[1]}
        />
      ))}
    </SimpleGrid>
  );
}
