import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
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
};
