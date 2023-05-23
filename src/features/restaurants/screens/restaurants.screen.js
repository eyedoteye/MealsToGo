import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer.component";
import { CrossPlatformSafeAreaView } from "../../../components/crossPlatformSafeAreaView.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

const SearchbarContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <CrossPlatformSafeAreaView>
      <SearchbarContainer>
        <Searchbar placeholder="Search" />
      </SearchbarContainer>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50} animating={true} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <RestaurantInfoCard restaurant={item} />
              <Spacer direction="top" size="large" />
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </CrossPlatformSafeAreaView>
  );
};
