import { Box, Container } from "@chakra-ui/react";

export default function PageBody({ children }) {
  return (
    <Box bg="bgPrimary" mt={{ base: "-126px", md: -5 }}>
      <Container maxWidth={"6xl"} pt={20} px={0}>
        {children}
      </Container>
    </Box>
  );
}
