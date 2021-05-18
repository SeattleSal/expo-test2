import React from "react";
import { View, Text, Button } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import TestScreen from "./screens/TestScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { fbApp } from "./config/firebase";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppNavigator } from "./routes/homeStack";


// navigation
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return <AppNavigator />;
}
