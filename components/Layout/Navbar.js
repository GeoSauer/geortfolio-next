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
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { FaEye, FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";
import InternalLinks from "../Links/InternalLinks";
import Link from "next/link";
import { useSuperDarkMode } from "@/providers/SuperDarkModeProvider";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const color = useColorModeValue("gray.500", "gray.300");
  const { superDarkMode, setSuperDarkMode } = useSuperDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSuperDarkMode = () => {
    setSuperDarkMode(!superDarkMode);
  };

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
          <Link href="/">
            <Heading size={"md"}>{myData.name}</Heading>
            <Text color={color}>{myData.designation}</Text>
          </Link>
        </VStack>

        {/* desktop nav */}
        <Box display={{ base: "none", md: "block" }}>
          <InternalLinks />
        </Box>

        <Stack direction={{ base: "column", md: "row" }}>
          <ButtonGroup variant="solid">
            <Tooltip label="LinkedIn" display={{ base: "none", md: "block" }}>
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.linkedIn}
                aria-label="LinkedIn"
                target="_blank"
                icon={<FaLinkedin />}
              />
            </Tooltip>
            <Tooltip label="GitHub" display={{ base: "none", md: "block" }}>
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.github}
                aria-label="GitHub"
                target="_blank"
                icon={<FaGithubAlt />}
              />
            </Tooltip>
            {/* //TODO */}
            {/* <Tooltip label="Portfolio" display={{ base: "none", md: "block" }}>
              <IconButton
                color={color}
                as="a"
                href={myData.socialUrls.portfolio}
                aria-label="Portfolio"
                target="_blank"
                icon={<FaEye />}
              />
            </Tooltip> */}
            <Tooltip
              label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}
              display={{ base: "none", md: "block" }}
            >
              <IconButton
                as="button"
                aria-label="Color Mode"
                onClick={toggleColorMode}
                color={color}
              >
                {mounted && colorMode === "light" ? <FaMoon /> : <FaSun />}
              </IconButton>
            </Tooltip>
            <Tooltip label="Toggle Super Dark Mode" display={{ base: "none", md: "block" }}>
              <IconButton
                as="button"
                aria-label="Super Dark Mode"
                onClick={toggleSuperDarkMode}
                hideBelow={"940px"}
                color={color}
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
