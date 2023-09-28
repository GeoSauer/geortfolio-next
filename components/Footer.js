import myData from "@/data";
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubAlt, FaEye } from "react-icons/fa";

export default function Footer() {
  const color = useColorModeValue("gray.500", "gray.300");

  return (
    <Box _dark={{ backgroundColor: "gray.900" }} bg={"gray.100"}>
      <Divider maxW={"6xl"} mx={"auto"} sx={{ borderWidth: "1px" }} />
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
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Geo Sauer. All rights reserved.
          </Text>

          <ButtonGroup variant="solid">
            <Tooltip label="LinkedIn">
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.linkedIn}
                aria-label="LinkedIn"
                target="_blank"
                icon={<FaLinkedin />}
              />
            </Tooltip>
            <Tooltip label="GitHub">
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.github}
                aria-label="GitHub"
                target="_blank"
                icon={<FaGithubAlt />}
              />
            </Tooltip>
            <Tooltip label="Portfolio">
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.portfolio}
                aria-label="Portfolio"
                target="_blank"
                icon={<FaEye />}
              />
            </Tooltip>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
