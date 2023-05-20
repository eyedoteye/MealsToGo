import React from "react";
import styled from "styled-components/native";

export const SpacerSmall = styled.View`
  padding-left: ${(props) => props.theme.space[2]};
`;

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const directionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const str = `${directionVariant[position]}:${
    theme.space[sizeVariant[size]]
  };`;
  // console.log(str);
  return str;
};

export const Spacer = styled.View`
  ${({ direction, size, theme }) => getVariant(direction, size, theme)}
`;

Spacer.defaultProps = {
  direction: "top",
  size: "small",
};
