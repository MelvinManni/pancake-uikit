import React from "react";
import { ChevronDownIcon, ChevronUpIcon, PlusIcon, MinusIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
}

interface LabelProps {
  onClick?: () => void;
  expanded?: boolean;
  width?: string;
  swapIcon?: boolean;
  flex?: boolean;
}

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <IconButton aria-label="Hide or show expandable content" onClick={onClick}>
      {children}
      {expanded ? <ChevronUpIcon color="invertedContrast" /> : <ChevronDownIcon color="invertedContrast" />}
    </IconButton>
  );
};
ExpandableButton.defaultProps = {
  expanded: false,
};

export const ExpandableLabel: React.FC<LabelProps> = ({ onClick, expanded, width, flex, swapIcon, children, ...rest }) => {
  const handleExpandIcon = () => (swapIcon === true ? <MinusIcon fontSize="22px" color="primary" /> : <ChevronUpIcon fontSize="22px" color="primary" />);
  const handleCloseIcon = () => (swapIcon === true ? <PlusIcon fontSize="22px" color="primary" /> : <ChevronDownIcon fontSize="22px" color="primary" />);
  return (
    <Button
      {...rest}
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      width={width}
      style={
        flex === true
          ? {
              display: "flex",
              justifyContent: "space-between",
            }
          : {}
      }
      endIcon={expanded ? handleExpandIcon() : handleCloseIcon()}
    >
      {children}
    </Button>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false,
};
