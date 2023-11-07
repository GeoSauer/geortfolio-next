import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageBodyProps = {
  children: ReactNode;
};

export default function PageBody({ children }: PageBodyProps) {
  return (
    <Box mt={{ base: "-126px", md: -5 }} bg="bgPrimary">
      <Container maxWidth={"6xl"} pt={20} px={0}>
        {children}
      </Container>
    </Box>
  );
}
