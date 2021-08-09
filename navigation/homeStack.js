import React from 'react'
// import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';

const Auth = createStackNavigator();
const AuthStack = () => (
  <Auth.Navigator initialRouteName="Login" headerMode="none">
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AuthStack;