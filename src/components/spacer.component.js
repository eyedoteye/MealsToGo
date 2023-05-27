import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const directionVariant = {
  top: "paddingTop",
  left: "paddingLeft",
  bottom: "paddingBottom",
  right: "paddingRight",
};

const getVariant = (position, size, theme) => {
  const str = `${directionVariant[position]}:${
    theme.space[sizeVariant[size]]
  };`;
  return str;
};

export const Spacer = styled.View`
  ${({ direction, size, theme }) => getVariant(direction, size, theme)}
`;

Spacer.defaultProps = {
  direction: "top",
  size: "small",
};
