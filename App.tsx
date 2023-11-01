import React from "react";
import { View } from "react-native";
import Developers from "./src/screens/Developers";
import Projects from "./src/screens/Projects";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import ForgetPassword from "./src/screens/ForgetPassword";
import Inbox from "./src/screens/Inbox";

const App = () =>{
  return (
    <View style={{flex: 1}}>
      {/* <Developers /> */}
      {/* <Projects /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <ForgetPassword /> */}
      <Inbox />
    </View>
  )
}

export default App;