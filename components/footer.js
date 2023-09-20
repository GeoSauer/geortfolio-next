import myData from "@/data";
import { ButtonGroup, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithubAlt, FaEye } from "react-icons/fa";

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" minWidth="80vw">
      <HStack justify="space-between" align="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Geo Sauer, All rights reserved.{" "}
        </Text>
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
    </Container>
  );
}
