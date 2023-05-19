import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 10,
  },
});
