import { Text } from "@chakra-ui/react";
import CustomLink from "../Custom/CustomLink";

type ContactMethodProps = {
  text: string;
  destination: string;
  href: string;
  color: string;
  sx: {};
};

export default function ContactMethod({ text, destination, href, color, sx }: ContactMethodProps) {
  return (
    <Text sx={sx}>
      {text}
      <CustomLink href={href} color={color} fontWeight={"bold"} target="_blank" rel="noreferrer">
        {destination}
      </CustomLink>
    </Text>
  );
}
