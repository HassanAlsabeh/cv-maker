import React from "react";
import HomeStack from "./stack/HomeStack";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import store from "./redux/store";
export default function App() {
    return (
      <Provider store={store}>
        <HomeStack>
          <StatusBar style="light" translucent={false} />
        </HomeStack>
       </Provider>
    );
  }

