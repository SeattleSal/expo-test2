import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity, Button
} from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={(email) => setEmail({ email })}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={(password) => setPassword({ email })}
        placeholder="Password"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>
      <Button title="Don't have an account yet? Sign up" />
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
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
},
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonSignUp: {
    fontSize: 12,
  },
});

export default Login;