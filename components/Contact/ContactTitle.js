import myData from "/data";
import { Box, Text } from "@chakra-ui/react";
import Underline from "../RoughNotation/Underline";

const title = myData.contact.title;

export default function ContactTitle({ color }) {
  return (
    <Box maxWidth={{ md: "60vw" }} mb={20}>
      <Text fontWeight={"semibold"} fontSize={{ base: "3xl", md: "4xl" }}>
        {title.beginning}
        <Underline color={color}>{title.underline}</Underline>
        {title.end}
      </Text>
    </Box>
  );
}
