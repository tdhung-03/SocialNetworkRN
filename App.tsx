import React from "react";
import { View } from "react-native";
import Developers from "./src/screens/Developers";
import Projects from "./src/screens/Projects";
import Login from "./src/screens/Login";

const App = () =>{
  return (
    <View style={{flex: 1}}>
      {/* <Developers /> */}
      {/* <Projects /> */}
      <Login />
    </View>
  )
}

export default App;