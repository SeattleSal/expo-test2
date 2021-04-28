import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import sunset from "./assets/Door-a.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={sunset} style={styles.logo} />

      <Text style={styles.instructions}>Hello World!</Text>

      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 400 }}
      />

      <TouchableOpacity
        onPress={() => alert("Hello World!")}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 24,
    marginHorizontal: 15,
  },
});
