import React from "react";
import CustomLink from "../Custom/CustomLink";
import { AspectRatio } from "@chakra-ui/react";
import CustomImage from "../Custom/CustomImage";

export default function ProjectCard({ href, ...props }) {
  return (
    <CustomLink href={href} target="_blank">
      <AspectRatio ratio={16 / 9}>
        <CustomImage
          {...props}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          rounded={{ base: "none", md: "lg" }}
        />
      </AspectRatio>
    </CustomLink>
  );
}
