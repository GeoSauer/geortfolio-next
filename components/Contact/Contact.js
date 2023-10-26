import myData from "@/data";
import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import CustomLink from "../Custom/CustomLink";

const textStyles = {
  as: "p",
  fontSize: { base: "2xl", md: "3xl" },
  fontWeight: "semibold",
  px: { base: 8, md: 0 },
};

const color = myData.colors[3];

export default function Contact() {
  return (
    <>
      <Flex
        direction={"column"}
        sx={textStyles}
        justify={"space-between"}
        mb={{ base: 20, md: 40 }}
      >
        <Box maxWidth={{ md: "60vw" }} mb={{ base: 20, md: 40 }}>
          <Text fontWeight={"semibold"} fontSize={{ base: "3xl", md: "4xl" }}>
            {myData.contact.title}
          </Text>
        </Box>
        <VStack align={{ base: "center", md: "end" }} pt={10}>
          <Text>
            Check out my{" "}
            <CustomLink
              href="/GeoSauer_Resume.pdf"
              color={color}
              fontWeight={"bold"}
              target="_blank"
              rel="noreferrer"
            >
              Resume.
            </CustomLink>
          </Text>
          <Text>
            And my{" "}
            <CustomLink
              href={myData.socialUrls.linkedIn}
              color={color}
              fontWeight={"bold"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn.
            </CustomLink>
          </Text>
          <Text>
            Maybe even my{" "}
            <CustomLink
              href={myData.socialUrls.github}
              color={color}
              fontWeight={"bold"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub.
            </CustomLink>
          </Text>
        </VStack>
      </Flex>

      <ContactForm />
    </>
  );
}
