import { SimpleGrid } from "@chakra-ui/react";
import myData from "@/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} pt={{ md: 10 }}>
      {myData.projects?.map((project, idx) => (
        <ProjectCard
          key={idx}
          href={project.link}
          src={project.imageUrl}
          alt={project.title}
          title={project.title}
          color={myData.colors[1]}
        />
      ))}
    </SimpleGrid>
  );
}
