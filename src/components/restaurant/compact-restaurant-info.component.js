import React from "react";
import styled from "styled-components/native";
import { Text, Platform } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = Platform.OS === "android" ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
