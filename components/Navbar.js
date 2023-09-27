import myData from "@/data";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";
import InternalLinks from "./InternalLinks";

export default function Navbar({ superDark, setSuperDark }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  //ensure component is mounted before rendering theme toggling UI as the server cannot know the current theme
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
            <Text>{myData.designation}</Text>
          </Link>
        </VStack>

        {/* desktop nav */}
        <HStack hideBelow={"940px"} spacing={8} fontWeight={"bold"}>
          <InternalLinks />
        </HStack>

        <HStack>
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
            <Tooltip label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}>
              <IconButton as="button" aria-label="Color Mode" onClick={toggleColorMode}>
                {mounted && colorMode === "light" ? <FaMoon /> : <FaSun />}
              </IconButton>
            </Tooltip>
            <Tooltip label="Toggle Super Dark Mode">
              <IconButton as="button" aria-label="Super Dark Mode" onClick={toggleSuperDarkMode}>
                {mounted && superDark ? <MdFlashlightOff /> : <MdFlashlightOn />}
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </HStack>
      </Flex>

      {/* mobile nav */}
      <HStack
        hideFrom={"941px"}
        justify={"space-evenly"}
        maxWidth={"90vw"}
        paddingY={2}
        fontWeight={"bold"}
      >
        <InternalLinks />
      </HStack>
    </Container>
  );
}
