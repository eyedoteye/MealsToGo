import React from "react";
import { View, Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://d33wubrfki0l68.cloudfront.net/0132870e97a7424f9ff4f040be051b7ea72c4686/4bc8d/img/blog/templates/banners/tooling-banner.png",
    ],
    address = "100 some random st",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return <Text>Hello</Text>;
};
