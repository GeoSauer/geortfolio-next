import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { chakra } from "@chakra-ui/react";

/** - Accepts props for both the Chakra UI and Next Image components */
const CustomImage = chakra<typeof NextImage, NextImageProps>(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "width",
      "height",
      "alt",
      "loader",
      "fill",
      "sizes",
      "quality",
      "priority",
      "placeHolder",
      "onLoadingComplete",
      "onLoad",
      "onError",
      "loading",
      "blurDataURL",
      "children",
    ].includes(prop),
});

export default CustomImage;
