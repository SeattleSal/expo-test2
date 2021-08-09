import Firebase, { db } from "../config/firebase";

// define types

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

// ACTIONS

// export const updateEmail = email => {
//     return {
//         type: UPDATE_EMAIL,
//         payload: email
//     }
// }

// export const updatePassword = () => {
//     return {
//         type: UPDATE_PASSWORD,
//         payload: password
//     }
// }

export const login = (email, password) => {
  console.log("login called...");
  console.log(email, password);
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
      dispatch({
        type: LOGIN,
        payload: response.user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// sign up new user with email and password
export const signUp = (email, password) => {
    console.log("sign up function in action...");
  return async (dispatch, getState) => {
    try {
      // const { email, password } = getState().user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      );
      dispatch({
        type: SIGNUP,
        payload: user
      });

    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
};
