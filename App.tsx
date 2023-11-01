import React from "react";
import { View } from "react-native";
import Developers from "./src/screens/Developers";
import Projects from "./src/screens/Projects";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";

const App = () =>{
  return (
    <View style={{flex: 1}}>
      {/* <Developers /> */}
      {/* <Projects /> */}
      {/* <Login /> */}
      <Signup />
    </View>
  )
}

export default App;