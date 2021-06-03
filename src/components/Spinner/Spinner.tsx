import React from "react";
import styled, { keyframes } from "styled-components";
import LoadingIcon from "./LoadingIcon";
import GroveIcon from "./GroveIcon";
import { SpinnerProps } from "./types";

const bounce = keyframes`
   from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(1px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
`;

const RotatingGroveIcon = styled(GroveIcon)`
  position: absolute;
  top: 0;
  left: 35%;
  animation: ${bounce} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingLoadingIcon = styled(LoadingIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingGroveIcon width={`${size * 0.5}px`} />
      <FloatingLoadingIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
