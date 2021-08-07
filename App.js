import React from "react";
import { View, Text, Button } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import TestScreen from "./screens/TestScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { fbApp } from "./config/firebase";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigator } from "./routes/homeStack";
import { AppTabs } from './routes/homeTabs'

import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

// navigation
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return <Login />;
  // <AppNavigator />;
  // return <AppTabs />;
}
