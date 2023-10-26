import { Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

export default function ViewMoreLink({ destination, ...props }) {
  return (
    <CustomLink
      {...props}
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
        {destination}
      </Text>
    </CustomLink>
  );
}
