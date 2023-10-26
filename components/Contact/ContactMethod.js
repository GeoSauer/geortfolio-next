import { Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

export default function ContactMethod({ text, destination, href, color, sx }) {
  return (
    <Text sx={sx}>
      {text}
      <CustomLink href={href} color={color} fontWeight={"bold"} target="_blank" rel="noreferrer">
        {destination}
      </CustomLink>
    </Text>
  );
}
