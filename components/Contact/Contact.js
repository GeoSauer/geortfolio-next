import myData from "@/data";
import { VStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ContactTitle from "./ContactTitle";
import ContactMethod from "./ContactMethod";

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
      <ContactTitle color={color} />

      <VStack align={{ base: "center", md: "end" }} py={10}>
        {myData.contact.contactMethods.map((method) => (
          <ContactMethod
            key={method.destination}
            text={method.text}
            destination={method.destination}
            href={method.href}
            color={color}
            sx={textStyles}
          />
        ))}
      </VStack>

      <ContactForm />
    </>
  );
}
