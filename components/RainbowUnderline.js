import { RoughNotation } from "react-rough-notation";

export const RainbowUnderline = ({ color, children }) => {
  return (
    <RoughNotation
      type="underline"
      padding={[0, 8]}
      iterations={1}
      strokeWidth={5}
      animationDuration={3000}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
