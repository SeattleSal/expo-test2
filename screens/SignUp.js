import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignUp() {
        return (
            <View style={styles.container}>
                <Text>Signup Screen</Text>
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

export default SignUp;