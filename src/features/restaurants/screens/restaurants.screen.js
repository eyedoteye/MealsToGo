import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList, Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer.component";
import { CrossPlatformSafeAreaView } from "../../../components/crossPlatformSafeAreaView.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";

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

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(navigation);
  return (
    <CrossPlatformSafeAreaView>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
              <Spacer direction="top" size="large" />
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </CrossPlatformSafeAreaView>
  );
};
