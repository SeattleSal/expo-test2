import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import TestScreen from '../screens/TestScreen'

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
<Tab.Navigator>
      <Tab.Screen name="Test Screen" component={TestScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )

  export const AppTabs = () => (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  )
