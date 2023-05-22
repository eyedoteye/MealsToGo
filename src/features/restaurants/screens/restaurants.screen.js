import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, View, Platform, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer.component"

const isAndroid = Platform.OS === "android";

const CrossPlatformSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchbarContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

const ListContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  flex-grow: 1;
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <CrossPlatformSafeAreaView>
    <SearchbarContainer>
      <Searchbar placeholder="Search" />
    </SearchbarContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
      ]}
      renderItem={() => (
        <>
          <RestaurantInfoCard />
          <Spacer direction="top" size="large" />
        </>
      )}
      keyExtractor={(item) => item.name}
    />
  </CrossPlatformSafeAreaView>
);
