import myData from "@/data";
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";

export default function LatestCode({ repositories }) {
  return (
    <Container marginTop={-40} paddingBottom={40}>
      <Box marginX={"auto"} maxWidth={"6xl"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Heading fontSize={{ base: "6xl", md: "9xl" }} textAlign={{ base: "center", md: "left" }}>
            Latest Code
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
          >
            View Github
          </Link>
        </Stack>
      </Box>
      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {repositories &&
          repositories.map((latestRepo, idx) => (
            <GithubRepoCard key={idx} latestRepo={latestRepo} />
          ))}
      </Grid>
    </Container>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  const styles = useStyleConfig("TransformBox");

  return (
    <Box>
      <Heading fontSize={"xl"}>{latestRepo.name}</Heading>
      <Text>{latestRepo.description}</Text>
      <Link href={latestRepo.clone_url}>
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
      </Link>
    </Box>
  );
};
