import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Cover = styled(Card.Cover)`
  padding: 10px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://i.imgur.com/qwB6S4W.png"],
    address = "100 some random st",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card>
      <Cover source={{ uri: photos[0] }} />
      <Card.Title title={name} titleStyle={styles.title} />
    </Card>
  );
};

// Card.Title needs to have its style set through titleStyle.
const styles = StyleSheet.create({
  title: {
    color: "blue",
  },
});
