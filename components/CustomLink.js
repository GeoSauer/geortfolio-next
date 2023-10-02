import { Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function CustomLink({ href, activeColor, children }) {
  const router = useRouter();
  const color = useColorModeValue("gray.500", "gray.300");

  return (
    <Link href={href}>
      <Text
        color={color}
        css={{
          color: "inherit",
          transform: "translateY(0)",
          transition: "color 0.3s ease, transform 0.3s ease",
          ...(router.asPath === href && {
            color: activeColor,
          }),
        }}
        _hover={{
          color: activeColor,
          transform: "translateY(-3px)",
        }}
      >
        {children}
      </Text>
    </Link>
  );
}
