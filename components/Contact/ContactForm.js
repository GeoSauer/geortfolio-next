import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const toast = useToast();

  const inputStyles = {
    mb: "5",
    width: { base: "90vw", md: "md" },
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const formData = new FormData();
      formData.append("access_key", "b5d7f4fb-2f18-4607-a4cb-c1784d31f117");
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log(result);
        setTimeout(() => {
          actions.resetForm();
          actions.setSubmitting(false);
          setMessageSent(true);
        }, 1000);
      } else {
        toast({
          title: "Message not sent, please email me directly at geo.sauer89@gmail.com",
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Container maxWidth={"xl"} p={5} align={"center"} rounded={{ md: "lg" }}>
      <VStack spacing={5}>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"semibold"} px={{ base: 8, md: 0 }}>
          {messageSent ? "Thanks! I'll get back to you soon." : "Get in touch, let's talk."}
        </Text>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} sx={inputStyles}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input {...field} id="name" placeholder="Your name" />
                    <ErrorMessage name="name" />
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email} sx={inputStyles}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="Your email" />
                    <ErrorMessage name="email" />
                  </FormControl>
                )}
              </Field>

              <Field name="message">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.message && form.touched.message}
                    sx={inputStyles}
                  >
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea {...field} id="message" placeholder="Your message" />
                    <ErrorMessage name="message" />
                  </FormControl>
                )}
              </Field>

              <Button isLoading={isSubmitting} type="submit" mt={4}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
}
