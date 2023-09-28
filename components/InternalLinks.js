import { Divider, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function InternalLinks() {
  const router = useRouter();
  const color = useColorModeValue("gray.500", "gray.300");

  return (
    <>
      <Link href="/about">
        <Text
          color={color}
          css={{
            ...(router.asPath === "/about" && { color: "#F4743B" }),
          }}
        >
          About
        </Text>
      </Link>
      <Divider orientation="vertical" sx={{ borderWidth: "1px" }} height={4} />
      <Link href="/projects">
        <Text
          color={color}
          css={{
            ...(router.asPath === "/projects" && { color: "#55c1FF" }),
          }}
        >
          Projects
        </Text>
      </Link>
      <Divider orientation="vertical" sx={{ borderWidth: "1px" }} height={4} />
      <Link href="/my-journey">
        <Text
          color={color}
          css={{
            ...(router.asPath === "/my-journey" && { color: "#5438DC" }),
          }}
        >
          My Journey
        </Text>
      </Link>
      <Divider orientation="vertical" sx={{ borderWidth: "1px" }} height={4} />
      <Link href="/contact">
        <Text
          color={color}
          css={{
            ...(router.asPath === "/contact" && { color: "#32E875" }),
          }}
        >
          Contact
        </Text>
      </Link>
    </>
  );
}
