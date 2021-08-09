import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ThunkMiddleware from "redux-thunk";
import AuthStack from "./navigation/homeStack";
import reducer from "./reducers";

const middleware = applyMiddleware(ThunkMiddleware);
const store = createStore(reducer, middleware);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
