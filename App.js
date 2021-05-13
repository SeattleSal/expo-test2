import React from "react";
// import { NativeRouter, Route, Link } from "react-router-native";
import RegistrationScreen from "./screens/RegistrationScreen";
// import TestScreen from "./screens/TestScreen";
// import LoginScreen from "./screens/LoginScreen";
import { fbApp } from "./config/firebase";


export default function App() {
  return (
    <RegistrationScreen />
  );
}