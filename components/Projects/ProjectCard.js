import React from "react";
import CustomLink from "../Custom/CustomLink";
import { AspectRatio, useColorMode } from "@chakra-ui/react";
import CustomImage from "../Custom/CustomImage";

export default function ProjectCard({ href, src, alt }) {
  const { colorMode } = useColorMode();
  return (
    <CustomLink href={href} target="_blank">
      <AspectRatio ratio={16 / 9}>
        <CustomImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          filter={colorMode === "dark" ? "grayscale(100%)" : null}
          transition={"filter 0.5s"}
          _hover={{ filter: "none" }}
          rounded={{ base: "none", md: "lg" }}
        />
      </AspectRatio>
    </CustomLink>
  );
}
