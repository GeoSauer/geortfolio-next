import CustomLink from "../Custom/CustomLink";
import myData from "/data";
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function LatestCode({ repositories }) {
  return (
    <Box as="section" marginTop={-40} paddingBottom={40}>
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
            color="title"
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: 10, md: "-45px" }}
          >
            <p>Latest</p>
            <p>Code</p>
          </Heading>

          <CustomLink
            href={`https://github.com/${myData.githubUsername}`}
            target="_blank"
            marginBottom={{ base: 20, md: 0 }}
            px={8}
            py={4}
            rounded={"md"}
            bg="button"
            color="buttonText"
            shadow={"xl"}
            alignItems={"center"}
            _hover={{
              "& .hover": {
                transform: "translateX(2px)",
              },
            }}
          >
            <Text
              className="hover"
              fontSize={"xl"}
              fontWeight={"bold"}
              transform={"translateX(0)"}
              transition={"transform 0.3s ease"}
            >
              View Github &rarr;
            </Text>
          </CustomLink>
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
  return (
    <Stack>
      <Heading fontSize={"2xl"} color="textPrimary">
        {latestRepo.name}
      </Heading>
      <Text color="textSecondary" fontWeight={"semibold"}>
        {latestRepo.description}
      </Text>
      <CustomLink
        href={latestRepo.clone_url}
        target="_blank"
        color="textPrimary"
        fontWeight={"bold"}
        transform={"translateX(0)"}
        transition={"transform 0.3s ease"}
        _hover={{
          transform: "translateX(2px)",
        }}
      >
        View Repository &rarr;
      </CustomLink>
    </Stack>
  );
};
