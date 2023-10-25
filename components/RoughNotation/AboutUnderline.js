import { RoughNotation } from "react-rough-notation";

export default function AboutUnderline({ color, children }) {
  return (
    <RoughNotation
      type="underline"
      padding={[0, 8]}
      iterations={1}
      strokeWidth={5}
      animationDuration={3000}
      color={color}
      show={true}
    >
      {children}
    </RoughNotation>
  );
}
