import myData from "/data";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";

export default function LatestCode({ repositories }) {
  const color = useColorModeValue("white", "gray.500");

  return (
    <Box marginTop={-40} paddingBottom={40} _dark={{ backgroundColor: "gray.900" }} bg={"gray.100"}>
      <Container maxWidth={"6xl"} px={0}>
        <Flex
          as={"header"}
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          alignItems={"center"}
          paddingTop={40}
          mx={10}
          pt={20}
        >
          <Heading
            as={"h1"}
            color={color}
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 10, md: "-45px" }}
          >
            <p>Latest</p>
            <p>Code</p>
          </Heading>

          <Link
            href={`https://github.com/${myData.githubUsername}`}
            marginBottom={{ base: 20, md: 0 }}
            px={8}
            py={4}
            rounded={"md"}
            bg={"white"}
            shadow={"lg"}
            fontSize={"xl"}
            fontWeight={"semibold"}
            color={"gray.700"}
            alignItems={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            View Github &rarr;
          </Link>
        </Flex>
      </Container>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={20} px={10} maxWidth={"5xl"} mx={"auto"}>
        {repositories &&
          repositories.map((latestRepo, idx) => (
            <GithubRepoCard key={idx} latestRepo={latestRepo} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  const styles = useStyleConfig("TransformBox");
  const color = useColorModeValue("gray.700", "gray.100");

  return (
    <Stack>
      <Heading fontSize={"xl"} color={color}>
        {latestRepo.name}
      </Heading>
      <Text color={color} _dark={{ color: "gray.600" }}>
        {latestRepo.description}
      </Text>
      <Link href={latestRepo.clone_url} style={{ textDecoration: "none" }}>
        <Flex dir="row" fontWeight={"bold"}>
          <Text>View Repository</Text>
          <Box
            as="div"
            className="group"
            _hover={{
              transform: "translateX(2px)",
              transition: "transform 0.3s",
            }}
            __css={styles}
          >
            &rarr;
          </Box>
        </Flex>
      </Link>
    </Stack>
  );
};
