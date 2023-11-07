import { Divider, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CustomLink from "../Custom/CustomLink";
import myData from "@/data";

const dividerStyles = {
  borderWidth: "1px",
  height: 4,
  mx: { md: 3 },
};

export default function InternalLinks() {
  return (
    <HStack justify={"space-evenly"} fontWeight={"bold"}>
      <StyledLink href="/about" activeColor={myData.colors[0]}>
        About
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/projects" activeColor={myData.colors[1]}>
        Projects
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/my-journey" activeColor={myData.colors[2]}>
        My Journey
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/contact" activeColor={myData.colors[3]}>
        Contact
      </StyledLink>
    </HStack>
  );
}

const StyledLink = ({ href, activeColor, children }) => {
  const router = useRouter();

  return (
    <CustomLink
      href={href}
      css={{
        transform: "translateY(0)",
        transition: "color 0.3s ease, transform 0.3s ease",
        ...(router.asPath === href && {
          color: activeColor,
        }),
      }}
      _hover={{
        color: activeColor,
        transform: "translateY(-3px)",
      }}
    >
      {children}
    </CustomLink>
  );
};
