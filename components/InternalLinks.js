import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function InternalLinks() {
  const router = useRouter();

  return (
    <>
      <Link href="/about">
        <Text
          css={{
            ...(router.asPath === "/about" && { color: "#F4743B" }),
          }}
        >
          About
        </Text>
      </Link>
      <Link href="/projects">
        <Text
          css={{
            ...(router.asPath === "/projects" && { color: "#55c1FF" }),
          }}
        >
          Projects
        </Text>
      </Link>
      <Link href="/my-journey">
        <Text
          css={{
            ...(router.asPath === "/my-journey" && { color: "#5438DC" }),
          }}
        >
          My Journey
        </Text>
      </Link>
      <Link href="/contact">
        <Text
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
