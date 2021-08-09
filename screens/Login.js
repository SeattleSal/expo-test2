import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity, Button
} from "react-native";
import Firebase from "../config/firebase";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, login } from "../actions/user";

function Login( { navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log('loginnnnnn');
    login();
    navigation.navigate('Profile');
    // Firebase.auth()
    // .signInWithEmailAndPassword(email, password)
    // .then(() => navigation.navigate('Profile'))
    // .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>
      <Button style={styles.buttonSignup} 
      title="Don't have an account yet? Sign up"
      onPress={() => navigation.navigate('SignUp')} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// export default Login;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
