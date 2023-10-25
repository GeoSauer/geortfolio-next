import CustomLink from "../Custom/CustomLink";
import myData from "/data";
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

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

          <CustomLink
            href={`https://github.com/${myData.githubUsername}`}
            target="_blank"
            px={{ base: 2, md: 6 }}
            py={{ base: 2, md: 4 }}
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
              fontSize={{ base: "md", md: "xl" }}
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
      <Heading fontSize={"2xl"}>{latestRepo.name}</Heading>
      <Text color="textSecondary" fontWeight={"semibold"}>
        {latestRepo.description}
      </Text>
      <CustomLink
        href={latestRepo.clone_url}
        target="_blank"
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
