import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

type ContactFormValues = {
  email: string;
  message: string;
  name: string;
};

type SubmissionStatus = {
  type: "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus | null>(null);

  const inputStyles = {
    mb: "5",
    width: { base: "90vw", md: "md" },
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>,
  ) => {
    setSubmissionStatus(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "b5d7f4fb-2f18-4607-a4cb-c1784d31f117");
      formData.append("email", values.email);
      formData.append("name", values.name);
      formData.append("message", values.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionStatus({
          type: "error",
          message: "Your message could not be sent. Please email me directly at geo.sauer89@gmail.com.",
        });
        return;
      }

      actions.resetForm();
      setSubmissionStatus({
        type: "success",
        message: "Thanks! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error: ", error);
      setSubmissionStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please email me directly at geo.sauer89@gmail.com.",
      });
    }
  };

  return (
    <Container maxWidth={"xl"} p={5} textAlign={"center"} rounded={{ md: "lg" }}>
      <VStack spacing={5}>
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"semibold"}
          px={{ base: 8, md: 0 }}
        >
          Get in touch, let&apos;s talk.
        </Text>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, submitCount }) => (
            <Form noValidate>
              {submitCount > 0 && Object.keys(errors).length > 0 && (
                <Text role="alert" aria-live="assertive" color="textPrimary" mb={4}>
                  Please correct the highlighted errors before submitting.
                </Text>
              )}
              <Field name="name">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isRequired
                    isInvalid={!!(form.errors.name && form.touched.name)}
                    sx={inputStyles}
                  >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Your name"
                    />
                    {form.touched.name && form.errors.name && (
                      <FormErrorMessage color="textPrimary">
                        {form.errors.name}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isRequired
                    isInvalid={!!(form.errors.email && form.touched.email)}
                    sx={inputStyles}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                    {form.touched.email && form.errors.email && (
                      <FormErrorMessage color="textPrimary">
                        {form.errors.email}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <Field name="message">
                {({ field, form }: FieldProps<string, ContactFormValues>) => (
                  <FormControl
                    isRequired
                    isInvalid={!!(form.errors.message && form.touched.message)}
                    sx={inputStyles}
                  >
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      {...field}
                      id="message"
                      placeholder="Your message"
                    />
                    {form.touched.message && form.errors.message && (
                      <FormErrorMessage color="textPrimary">
                        {form.errors.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <Button isLoading={isSubmitting} type="submit" mt={4}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        {submissionStatus && (
          <Text
            role={submissionStatus.type === "error" ? "alert" : "status"}
            aria-live={submissionStatus.type === "error" ? "assertive" : "polite"}
            aria-atomic="true"
            color="textPrimary"
          >
            {submissionStatus.message}
          </Text>
        )}
      </VStack>
    </Container>
  );
}
