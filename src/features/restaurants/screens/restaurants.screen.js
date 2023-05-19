import React from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { List, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const CrossPlatformSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchbarContainer = styled(View)`
  background-color: green;
  padding: 10px;
`;

const ListContainer = styled(View)`
  background-color: blue;
  flex: 1;
  flex-grow: 1;
  padding: 10px;
`;

export const RestaurantsScreen = () => (
  <CrossPlatformSafeAreaView>
    <SearchbarContainer>
      <Searchbar placeholder="Search" />
    </SearchbarContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </CrossPlatformSafeAreaView>
);
