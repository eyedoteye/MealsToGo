import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
    backgroundColor: "red",
    flex: 1,
    flexGrow: 1,
    padding: 10,
  },
});
