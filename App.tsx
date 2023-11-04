import React from 'react';
import {View} from 'react-native';
import Developers from './src/screens/Developers';
import Projects from './src/screens/Projects';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ForgetPassword from './src/screens/ForgetPassword';
import Inbox from './src/screens/Inbox';
import Account from './src/screens/Account';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Projects"
        screenOptions={{contentStyle: {backgroundColor: '#f8fafd', flex: 1}}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Developers" component={Developers} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
