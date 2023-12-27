import React from "react";
import { Button, View, Text, SafeAreaView, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
    flexDirection: "column",
    height: "100%",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});

export default Home;
