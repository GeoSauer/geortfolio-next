import { Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

type ViewMoreLinkProps = {
  href: string;
  destination: string;
  target?: string;
  whiteSpace?:
    | "-moz-pre-wrap"
    | "break-spaces"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap";
};

export default function ViewMoreLink({
  href,
  target,
  whiteSpace = "normal",
  destination,
  ...props
}: ViewMoreLinkProps) {
  return (
    <CustomLink
      href={href}
      target={target}
      whiteSpace={whiteSpace}
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
      {...props}
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
