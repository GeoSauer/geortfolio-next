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
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaGithubAlt, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";

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
            <IconButton
              as="button"
              aria-label="Color Mode"
              data-toggle="tooltip"
              title={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}
              onClick={toggleColorMode}
            >
              {mounted && colorMode === "light" ? <FaMoon /> : <FaSun />}
            </IconButton>
            <IconButton
              as="button"
              aria-label="Super Dark Mode"
              data-toggle="tooltip"
              title="Toggle Super Dark Mode"
              onClick={toggleSuperDarkMode}
            >
              {mounted && superDark ? <MdFlashlightOff /> : <MdFlashlightOn />}
            </IconButton>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Container>
  );
}
