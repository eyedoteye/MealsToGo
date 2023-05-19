import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.root}>
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 10,
  },
  listContainer: {
    backgroundColor: "blue",
    flex: 1,
    flexGrow: 1,
    padding: 10,
  },
});