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
      <StyledLink href="/about" activeColor="accentOrange">
        About
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/products" activeColor="accentBlue">
        Products
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/my-journey" activeColor="accentPurple">
        My Journey
      </StyledLink>
      <Divider orientation="vertical" sx={dividerStyles} />

      <StyledLink href="/contact" activeColor="accentGreen">
        Contact
      </StyledLink>
    </HStack>
  );
}

const StyledLink = ({ href, activeColor, children }: StyledLinkProps) => {
  const router = useRouter();
  const isCurrentPage = router.asPath === href;

  return (
    <CustomLink
      href={href}
      aria-current={isCurrentPage ? "page" : undefined}
      css={{
        transform: "translateY(0)",
        transition: "color 0.3s ease, transform 0.3s ease",
        ...(isCurrentPage && {
          color: activeColor,
          textDecoration: "underline",
          textUnderlineOffset: "0.2em",
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
