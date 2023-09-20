import myData from "@/data";
import {
  Container,
  HStack,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaEye, FaGithubAlt, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <Container as="nav" role="navigation" minWidth="80vw">
      <HStack justify="space-between" align="center">
        <VStack>
          <Link href="/">
            <Heading>{myData.name}</Heading>
            <Text>{myData.designation}</Text>
          </Link>
        </VStack>
        <HStack>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/myStory">My Story</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
        <HStack>
          <ButtonGroup variant="">
            <IconButton
              as="a"
              href={myData.socialUrls.linkedIn}
              aria-label="LinkedIn"
              data-toggle="tooltip"
              title="LinkedIn"
              target="_blank"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href={myData.socialUrls.github}
              aria-label="GitHub"
              data-toggle="tooltip"
              title="GitHub"
              target="_blank"
              icon={<FaGithubAlt />}
            />
            <IconButton
              as="a"
              href={myData.socialUrls.portfolio}
              aria-label="Portfolio"
              data-toggle="tooltip"
              title="Portfolio"
              target="_blank"
              icon={<FaEye />}
            />
          </ButtonGroup>
        </HStack>
      </HStack>
    </Container>
  );
}
