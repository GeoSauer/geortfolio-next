import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { chakra } from "@chakra-ui/react";

const CustomLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  shouldForwardProp: (prop) =>
    ["href", "replace", "scroll", "prefetch", "target", "children"].includes(prop),
});

export default CustomLink;
