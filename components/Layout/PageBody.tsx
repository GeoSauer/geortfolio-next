import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageBodyProps = {
  children: ReactNode;
  hasPageHeading: boolean;
};

export default function PageBody({ children, hasPageHeading }: PageBodyProps) {
  return (
    <Box mt={hasPageHeading ? { base: "-126px", md: -5 } : { base: "125px", md: "170px" }} bg="bgPrimary">
      <Container maxWidth={"6xl"} pt={hasPageHeading ? 20 : 50} px={0}>
        {children}
      </Container>
    </Box>
  );
}
