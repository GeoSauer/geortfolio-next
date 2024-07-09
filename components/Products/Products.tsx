import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import myData from "@/data";

export default function Products() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} pt={{ md: 10 }}>
      {myData.projects?.map((project) => (
        <ProductCard
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
