import React from "react";
import CustomLink from "../Custom/CustomLink";
import { AspectRatio, Box } from "@chakra-ui/react";
import CustomImage from "../Custom/CustomImage";

type ProductCardProps = {
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

export default function ProductCard({
  href,
  src,
  alt,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw",
  rounded = { base: "none", md: "lg" },
  // title,
  // color,
  ...props
}: ProductCardProps) {
  return (
    <Box transition={"transform 0.3s ease"} sx={{ "&:hover": { transform: "scale(1.05)" } }}>
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
    </Box>
  );
}
