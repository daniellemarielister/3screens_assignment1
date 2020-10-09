import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menus from './screens/Details';
import HomeScreen from './screens/Home';
import Brekkie from './screens/Brekkie';
import Nourishments from './screens/Nourishments';
import Potions from './screens/Potions';

const Stack = createStackNavigator();


function App() {
  return (
    // Stack Naviation for screens
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menus" component={Menus} options={{ headerShown: false }}/>
        <Stack.Screen name="Brekkie" component={Brekkie} options={
          {
            title: "The Drunken Goat",
            headerStyle: {
              backgroundColor: '#E5B55C',
            },
            headerTintColor: "#173D3D",
            headerTitleStyle: {
              fontSize: 14,
              textTransform: 'uppercase',

            }
          }}/>
        <Stack.Screen name="Nourishments" component={Nourishments} options={
          {
            title: "The Drunken Goat",
            headerStyle: {
              backgroundColor: '#E5B55C',
            },
            headerTintColor: "#173D3D",
            headerTitleStyle: {
              fontSize: 14,
              textTransform: 'uppercase',
            }
          }}/>
        <Stack.Screen name="Potions" component={Potions} options={
          {
            title: "The Drunken Goat",
            headerStyle: {
              backgroundColor: '#E5B55C',
            },
            headerTintColor: "#173D3D",
            headerTitleStyle: {
              fontSize: 14,
              textTransform: 'uppercase',

            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;