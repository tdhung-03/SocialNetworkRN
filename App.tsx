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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Developers">
      <Tab.Screen
        name="Developers"
        component={Developers}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
