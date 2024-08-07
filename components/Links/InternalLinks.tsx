import { Divider, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import myData from "@/data";
import CustomLink from "../Custom/CustomLink";
import { ReactNode } from "react";

type StyledLinkProps = {
  href: string;
  activeColor: string;
  children: ReactNode;
};

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

      <StyledLink href="/products" activeColor={myData.colors[1]}>
        Products
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

const StyledLink = ({ href, activeColor, children }: StyledLinkProps) => {
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
