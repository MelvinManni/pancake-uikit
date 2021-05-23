import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 15" {...props}>
      <path d="M15.35 6.38V8.63H9.2V14.96H6.95V8.63H0.77V6.38H6.95V0.0799997H9.2V6.38H15.35Z" />
    </Svg>
  );
};

export default Icon;
