import React from "react";
import styled from "styled-components/native";
// import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import {
  Cover,
  Info,
  Address,
  Rating,
  MiscContainer,
  Open,
  Icon,
  SubInfo,
} from "./restaurant-info-card.styles";
import { Text } from "../../../components/text.component";
import { Spacer } from "../../../components/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
        <Text variant="label">{name}</Text>
        <SubInfo>
          <Rating>
            {ratingArray.map((v, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <MiscContainer>
            <Icon source={{ uri: icon }} />
            <Spacer direction="left" size="medium" />
            {isOpenNow && <Open xml={open} />}
            <Spacer direction="left" size="medium" />
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
          </MiscContainer>
        </SubInfo>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
