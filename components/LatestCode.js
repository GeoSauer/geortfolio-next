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
            textDecoration={"none"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text
              transform={"translateX(0)"}
              transition={"transform 0.3s ease"}
              _hover={{
                transform: "translateX(2px)",
              }}
            >
              View Github &rarr;
            </Text>
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
  const color = useColorModeValue("gray.700", "gray.100");

  return (
    <Stack>
      <Heading fontSize={"xl"} color={color}>
        {latestRepo.name}
      </Heading>
      <Text color={color} _dark={{ color: "gray.600" }}>
        {latestRepo.description}
      </Text>
      <Link
        href={latestRepo.clone_url}
        textDecoration={"none"}
        fontWeight={"bold"}
        transform={"translateX(0)"}
        transition={"transform 0.3s ease"}
        _hover={{
          transform: "translateX(2px)",
        }}
      >
        View Repository &rarr;
      </Link>
    </Stack>
  );
};
