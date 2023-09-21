import myData from "@/data";
import { ButtonGroup, Container, HStack, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { FaLinkedin, FaGithubAlt, FaEye } from "react-icons/fa";

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" minWidth="90vw" paddingTop={10}>
      <HStack justify="space-between" align="center">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Geo Sauer, All rights reserved.</Text>

        <ButtonGroup variant="solid">
          <Tooltip label="LinkedIn">
            <IconButton
              as="a"
              href={myData.socialUrls.linkedIn}
              aria-label="LinkedIn"
              target="_blank"
              icon={<FaLinkedin />}
            />
          </Tooltip>
          <Tooltip label="GitHub">
            <IconButton
              as="a"
              href={myData.socialUrls.github}
              aria-label="GitHub"
              target="_blank"
              icon={<FaGithubAlt />}
            />
          </Tooltip>
          <Tooltip label="Portfolio">
            <IconButton
              as="a"
              href={myData.socialUrls.portfolio}
              aria-label="Portfolio"
              target="_blank"
              icon={<FaEye />}
            />
          </Tooltip>
        </ButtonGroup>
      </HStack>
    </Container>
  );
}
