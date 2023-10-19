import myData from "/data";
import {
  Container,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  IconButton,
  useColorMode,
  Flex,
  Tooltip,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";
import InternalLinks from "../Links/InternalLinks";
import { useSuperDarkMode } from "@/providers/SuperDarkModeProvider";
import CustomLink from "../Custom/CustomLink";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const { superDarkMode, setSuperDarkMode } = useSuperDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container as="nav" role="navigation" maxWidth={"6xl"} paddingY={{ base: 10, md: 20 }}>
      <Flex justify="space-between" align="center">
        <VStack
          css={{
            transform: "translateY(0)",
            transition: "transform 0.3s ease",
          }}
          _hover={{
            transform: "translateY(-5px)",
          }}
        >
          <CustomLink href="/">
            <Heading size={"md"} color="textPrimary">
              {myData.name}
            </Heading>
            <Text color="textSecondary">{myData.designation}</Text>
          </CustomLink>
        </VStack>

        {/* desktop nav */}
        <Box display={{ base: "none", md: "block" }}>
          <InternalLinks />
        </Box>

        <Stack direction={{ base: "column", md: "row" }}>
          <ButtonGroup variant="solid">
            <Tooltip label="LinkedIn" display={{ base: "none", md: "block" }}>
              <IconButton
                color="icon"
                as="a"
                href={myData.socialUrls.linkedIn}
                aria-label="LinkedIn"
                target="_blank"
                icon={<FaLinkedin />}
              />
            </Tooltip>

            <Tooltip label="GitHub" display={{ base: "none", md: "block" }}>
              <IconButton
                color="icon"
                as="a"
                href={myData.socialUrls.github}
                aria-label="GitHub"
                target="_blank"
                icon={<FaGithubAlt />}
              />
            </Tooltip>

            <Tooltip
              label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}
              display={{ base: "none", md: "block" }}
            >
              <IconButton
                as="button"
                aria-label="Color Mode"
                onClick={toggleColorMode}
                color="icon"
              >
                {mounted && colorMode === "light" ? <FaMoon /> : <FaSun />}
              </IconButton>
            </Tooltip>

            <Tooltip label="Toggle Super Dark Mode" display={{ base: "none", md: "block" }}>
              <IconButton
                as="button"
                aria-label="Super Dark Mode"
                onClick={() => setSuperDarkMode(!superDarkMode)}
                hideBelow={"940px"}
                color="icon"
              >
                {mounted && superDarkMode ? <MdFlashlightOff /> : <MdFlashlightOn />}
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Stack>
      </Flex>

      {/* mobile nav */}
      <Box display={{ base: "block", md: "none" }} pt={6}>
        <InternalLinks />
      </Box>
    </Container>
  );
}
