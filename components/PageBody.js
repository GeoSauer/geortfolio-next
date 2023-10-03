import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function PageBody({ children }) {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} mt={{ base: -20, md: -5 }}>
      <Container maxWidth={"6xl"} pt={20} px={0}>
        {children}
      </Container>
    </Box>
  );
}
