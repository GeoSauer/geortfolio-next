import myData from "/data";
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="bgPrimary" pt={20}>
      <Divider maxW={"6xl"} mx={"auto"} sx={{ borderWidth: "1px" }} borderColor="divider" />
      <Container
        as="footer"
        role="contentinfo"
        maxW={"6xl"}
        paddingTop={10}
        pb={{ base: 30, md: 70 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={6}
        >
          <Text fontSize="sm" color="textPrimary">
            &copy; {new Date().getFullYear() !== 2023 ? "2023 - " : null}
            {new Date().getFullYear()} Geo Sauer. All rights reserved.
          </Text>

          <ButtonGroup variant="solid">
            <Tooltip label="LinkedIn">
              <IconButton
                color="icon"
                bg="iconBG"
                _hover={{ bg: "iconHover" }}
                as="a"
                href={myData.socialUrls.linkedIn}
                aria-label="LinkedIn"
                target="_blank"
                icon={<FaLinkedin />}
              />
            </Tooltip>

            <Tooltip label="GitHub">
              <IconButton
                color="icon"
                bg="iconBG"
                _hover={{ bg: "iconHover" }}
                as="a"
                href={myData.socialUrls.github}
                aria-label="GitHub"
                target="_blank"
                icon={<FaGithubAlt />}
              />
            </Tooltip>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
