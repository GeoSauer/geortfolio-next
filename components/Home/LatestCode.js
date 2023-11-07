import myData from "@/data";
import GithubRepoCard from "./GithubRepoCard";
import ViewMoreLink from "./ViewMoreLink";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

export default function LatestCode({ repositories }) {
  return (
    <Box as="section" paddingBottom={{ base: 20, md: 40 }}>
      <Container maxWidth={"6xl"} px={0}>
        <Flex
          as={"header"}
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
          paddingTop={{ base: 40, md: 60 }}
          mx={{ base: 2, md: 10 }}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "6xl", md: "9xl" }}
            textAlign={"left"}
            mb={{ md: "-45px" }}
            color="title"
          >
            Latest
            <br />
            Code
          </Heading>

          <ViewMoreLink
            href={myData.socialUrls.github}
            target="_blank"
            destination="View Github &rarr;"
          />
        </Flex>
      </Container>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={20} px={10} maxWidth={"5xl"} mx={"auto"}>
        {repositories &&
          repositories.map((latestRepo) => (
            <GithubRepoCard key={latestRepo.name} latestRepo={latestRepo} />
          ))}
      </SimpleGrid>
    </Box>
  );
}
