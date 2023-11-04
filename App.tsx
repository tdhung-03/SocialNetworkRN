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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
