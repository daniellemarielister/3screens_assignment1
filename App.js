import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import HomeScreen from './screens/Home';
import Brekkie from './screens/Brekkie';
import Nourishments from './screens/Nourishments';
import Potions from './screens/Potions';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
        <Stack.Screen name="Brekkie" component={Brekkie} />
        <Stack.Screen name="Nourishments" component={Nourishments} />
        <Stack.Screen name="Potions" component={Potions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;