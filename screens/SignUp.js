import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Firebase from "../config/firebase";

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { signUp } from '../actions/user';


function SignUp( { navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
      console.log(name, email, password);
      // updateEmail(email);
      // updatePassword(password);
      // dispatch calls
      // signUp(email, password);
      // navigation.navigate('Profile');

      // this below call works but call to REDUX does NOT work...
      Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Profile'))
      .catch( error => console.log(error));
  }
  
  // uses the updateEmail and updatePassword instead of setStates
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <TextInput
        style={styles.inputBox}
        value={name}
        onChangeText={ (name) => setName( name )}
        placeholder="Name"
        />
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={ email => setEmail( email )}
        placeholder="Email"
        autoCapitalize="none"
        />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={ password => setPassword( password )}
        placeholder="Password"
        secureTextEntry={true}
        />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#FFA611",
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});

// do i add these to inside the function???
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

// export default SignUp;
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SignUp)
  