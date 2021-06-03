import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <rect x="19" y="44" width="12" height="12" fill="#d7862f">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="39.8;44;44"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.35714285714285715s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="20.400000000000002;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.35714285714285715s"
        ></animate>
      </rect>
      <rect x="44" y="44" width="12" height="12" fill="#ef9535">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="40.85;44;44"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.17857142857142858s"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="18.3;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.17857142857142858s"
        ></animate>
      </rect>
      <rect x="69" y="44" width="12" height="12" fill="#ffc991">
        <animate
          attributeName="y"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="40.85;44;44"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
        <animate
          attributeName="height"
          repeatCount="indefinite"
          dur="1.7857142857142856s"
          calcMode="spline"
          keyTimes="0;0.5;1"
          values="18.3;12;12"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        ></animate>
      </rect>
    </Svg>
  );
};

export default Icon;
