import PageHeading from "./PageHeading";
import PageBody from "./PageBody";
import myData from "@/data";
import {
  Flex,
  Link as ChakraLink,
  Text,
  VStack,
  Box,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Container,
  Button,
} from "@chakra-ui/react";

export default function Contact() {
  const textStyles = {
    as: "p",
    fontSize: { base: "2xl", md: "3xl" },
    px: { base: 8, md: 0 },
  };

  const color = myData.colors[3];

  return (
    <>
      <PageHeading>Contact.</PageHeading>

      <PageBody>
        <Flex
          direction={{ base: "column", md: "row" }}
          sx={textStyles}
          justify={"space-between"}
          mb={{ base: 10, md: 20 }}
        >
          <Box maxWidth={{ md: "60vw" }} pt={1}>
            <Text fontWeight={"semibold"} fontSize={{ base: "3xl", md: "4xl" }}>
              {myData.contact.title}
            </Text>
          </Box>
          <VStack align={{ base: "start", md: "end" }} pt={{ base: 10, md: 150 }} spacing={0}>
            {/* <Text>
              Send me an{" "}
              <ChakraLink href="" color={color} isExternal>
                email.
              </ChakraLink>
            </Text> */}
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
        <Container
          maxWidth={"xl"}
          p={5}
          align={"center"}
          bg={"gray.400"}
          _dark={{ bg: "gray.800" }}
          rounded={{ md: "lg" }}
        >
          <VStack spacing={5}>
            <Text sx={textStyles}>Get in touch, let's talk.</Text>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <Button type="submit">Send Message</Button>
            </FormControl>
          </VStack>
        </Container>
      </PageBody>
    </>
  );
}
