import React from "react";
import CustomLink from "../Custom/CustomLink";
import { AspectRatio } from "@chakra-ui/react";
import CustomImage from "../Custom/CustomImage";

type ProjectCardProps = {
  href: string;
  src: string;
  alt: string;
  // title: string;
  // color: string;
  fill?: boolean;
  sizes?: string;
  rounded?: {
    base: string;
    md: string;
  };
};

export default function ProjectCard({
  href,
  src,
  alt,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw",
  rounded = { base: "none", md: "lg" },
  // title,
  // color,
  ...props
}: ProjectCardProps) {
  return (
    <CustomLink href={href} target="_blank">
      <AspectRatio ratio={16 / 9}>
        <CustomImage
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          rounded={rounded}
          // title={title}
          // color={color}
          {...props}
        />
      </AspectRatio>
    </CustomLink>
  );
}
