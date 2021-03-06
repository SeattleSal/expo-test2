import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import sunset from "../assets/Door-a.jpg";
import { TestComponent } from '../components/AppComponents';

function TestScreen() {
    return (
        <View style={styles.container}>

            <TestComponent />

            <Image source={sunset} style={styles.logo} />
    
            <Text style={styles.instructions}>Hello Seattle!</Text>
    
            <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: 400, height: 400 }}
            />
    
            <TouchableOpacity
            onPress={() => alert("Hello World!")}
            style={{ backgroundColor: "blue" }}
            >
            <Text style={{ fontSize: 20, color: "#fff" }}>I'm a button!</Text>
            </TouchableOpacity>

        </View>
    )
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

export default TestScreen
