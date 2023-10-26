import { Heading, Stack, Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

export default function GithubRepoCard({ latestRepo }) {
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
}
