import { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

type HeroHighlightProps = {
  color: string;
  children: ReactNode;
};

export default function HeroHighlight({ color, children }: HeroHighlightProps) {
  return (
    <RoughNotation
      type="highlight"
      padding={[0, 8]}
      iterations={1}
      strokeWidth={15}
      animationDuration={750}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}
