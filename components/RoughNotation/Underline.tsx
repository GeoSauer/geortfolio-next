import { ReactNode } from "react";
import { usePrefersReducedMotion } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import DecorativeNotation from "./DecorativeNotation";

type UnderlineProps = {
  color: string;
  children: ReactNode;
};

export default function Underline({ color, children }: UnderlineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <DecorativeNotation>
      <RoughNotation
        type="underline"
        padding={[0, 8]}
        iterations={1}
        strokeWidth={5}
        animate={!prefersReducedMotion}
        animationDuration={prefersReducedMotion ? 0 : 3000}
        color={color}
        show={true}
      >
        {children}
      </RoughNotation>
    </DecorativeNotation>
  );
}
