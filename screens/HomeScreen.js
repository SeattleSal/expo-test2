import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ( { navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Registration"
          onPress={() => navigation.navigate('Register')}
        />
              <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
                      <Button
          title="Go to Test"
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    )
}

export default HomeScreen
