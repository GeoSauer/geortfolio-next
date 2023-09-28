import myData from "/data";
import {
  Container,
  HStack,
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
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";
import InternalLinks from "./InternalLinks";

export default function Navbar({ superDark, setSuperDark }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const color = useColorModeValue("gray.500", "gray.300");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSuperDarkMode = () => {
    setSuperDark(!superDark);
  };

  return (
    <Container as="nav" role="navigation" maxWidth={"6xl"} paddingY={{ base: 10, md: 20 }}>
      <Flex justify="space-between" align="center">
        <VStack>
          <Link href="/">
            <Heading size={"md"}>{myData.name}</Heading>
            <Text color={color}>{myData.designation}</Text>
          </Link>
        </VStack>

        {/* desktop nav */}
        <HStack hideBelow={"940px"} spacing={8} fontWeight={"bold"}>
          <InternalLinks />
        </HStack>

        <Stack direction={{ base: "column", md: "row" }}>
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
          <ButtonGroup variant="solid" justifyContent={"end"}>
            <Tooltip label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}>
              <IconButton
                as="button"
                aria-label="Color Mode"
                onClick={toggleColorMode}
                color={color}
              >
                {mounted && colorMode === "light" ? <FaMoon /> : <FaSun />}
              </IconButton>
            </Tooltip>
            <Tooltip label="Toggle Super Dark Mode">
              <IconButton
                as="button"
                aria-label="Super Dark Mode"
                onClick={toggleSuperDarkMode}
                color={color}
              >
                {mounted && superDark ? <MdFlashlightOff /> : <MdFlashlightOn />}
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Stack>
      </Flex>

      {/* mobile nav */}
      <HStack
        hideFrom={"941px"}
        justify={"space-evenly"}
        maxWidth={"90vw"}
        pt={6}
        fontWeight={"bold"}
      >
        <InternalLinks />
      </HStack>
    </Container>
  );
}
