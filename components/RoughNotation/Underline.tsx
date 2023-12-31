import { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

type UnderlineProps = {
  color: string;
  children: ReactNode;
};

export default function Underline({ color, children }: UnderlineProps) {
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
