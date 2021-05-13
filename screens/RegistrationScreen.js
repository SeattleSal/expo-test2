import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function RegistrationScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [passwordConfirm, onChangePasswordConfirm] = useState("");

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={onChangePasswordConfirm}
        value={passwordConfirm}
        placeholder="confirm password"
      ></TextInput>
      <Button title="Sign Up" onPress={() => Alert.alert("Button Pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
