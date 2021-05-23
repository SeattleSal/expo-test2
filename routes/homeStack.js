import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegistrationScreen from '../screens/RegistrationScreen'
import LoginScreen from '../screens/LoginScreen'
import TestScreen from '../screens/TestScreen'
import HomeScreen from '../screens/HomeScreen'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        <Screen name = "Home" component={HomeScreen} />
        <Screen name = "Register" component={RegistrationScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Test" component={TestScreen} />
    </Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
)