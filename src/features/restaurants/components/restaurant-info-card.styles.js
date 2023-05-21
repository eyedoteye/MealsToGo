import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
`;

export const MiscContainer = styled.View`
  flex-grow: 1;
  flex-direction: row-reverse;
`;

export const Open = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const Icon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const SubInfo = styled.View`
  flex-direction: row;
`;