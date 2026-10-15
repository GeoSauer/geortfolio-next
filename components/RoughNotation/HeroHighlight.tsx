import { ReactNode } from "react";
import { usePrefersReducedMotion } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import DecorativeNotation from "./DecorativeNotation";

type HeroHighlightProps = {
  color: string;
  children: ReactNode;
};

export default function HeroHighlight({ color, children }: HeroHighlightProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <DecorativeNotation>
      <RoughNotation
        type="highlight"
        padding={[0, 8]}
        iterations={1}
        strokeWidth={15}
        animate={!prefersReducedMotion}
        animationDuration={prefersReducedMotion ? 0 : 750}
        color={color}
      >
        {children}
      </RoughNotation>
    </DecorativeNotation>
  );
}
