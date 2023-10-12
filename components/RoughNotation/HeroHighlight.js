import { RoughNotation } from "react-rough-notation";

export default function HeroHighlight({ color, children }) {
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
