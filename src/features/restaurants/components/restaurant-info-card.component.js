import React from "react";
import styled from "styled-components/native";
// import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { SpacerSmall } from "../../../components/spacer/spacer";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
`;

const MiscContainer = styled.View`
  flex-grow: 1;
  flex-direction: row-reverse;
`;

const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
`;

const Open = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

const Icon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://i.imgur.com/qwB6S4W.png"],
    address = "100 some random st",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card>
      <Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <MiscContainer>
          <Icon source={{ uri: icon }} />
          <SpacerSmall />
          {isOpenNow && <Open xml={open} />}
          <SpacerSmall />
          {isClosedTemporarily && <ClosedText>CLOSED TEMPORARILY</ClosedText>}
        </MiscContainer>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
