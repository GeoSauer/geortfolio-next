import PageHeading from "./PageHeading";
import PageBody from "./PageBody";
import myData from "@/data";
import { Flex, Link as ChakraLink, Text, VStack, Box } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const textStyles = {
    as: "p",
    fontSize: { base: "2xl", md: "3xl" },
    fontWeight: "semibold",
    px: { base: 8, md: 0 },
  };

  const color = myData.colors[3];

  return (
    <>
      <PageHeading>Contact</PageHeading>

      <PageBody>
        <Flex
          direction={{ base: "column" }}
          sx={textStyles}
          justify={"space-between"}
          mb={{ base: 10, md: 20 }}
        >
          <Box maxWidth={{ md: "60vw" }}>
            <Text fontWeight={"semibold"} fontSize={{ base: "3xl", md: "4xl" }}>
              {myData.contact.title}
            </Text>
          </Box>
          <VStack align={{ base: "center", md: "end" }} pt={10}>
            <Text>
              Check out my{" "}
              <ChakraLink href="" color={color} isExternal>
                Resume.
              </ChakraLink>
            </Text>
            <Text>
              And my{" "}
              <ChakraLink href={myData.socialUrls.linkedIn} color={color} isExternal>
                LinkedIn.
              </ChakraLink>
            </Text>
            <Text>
              Maybe even my{" "}
              <ChakraLink href={myData.socialUrls.github} color={color} isExternal>
                GitHub.
              </ChakraLink>
            </Text>
          </VStack>
        </Flex>

        <ContactForm />
      </PageBody>
    </>
  );
}
