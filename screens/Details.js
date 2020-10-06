import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Brekkie from '../screens/Brekkie';
import Nourishments from '../screens/Nourishments';
import Potions from '../screens/Potions';

const Stack = createStackNavigator();

export default function Details({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#173D3D', }}>
        <View style={styles.topContainer}>
          <Image source={require('../assets/Images/menus.png')}></Image>
        </View>
        <View style={styles.middleContainer}>      
          <View style={styles.subContainer}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Brekkie')}>
              <Image
              style={styles.circleButton}
              source={require('../assets/Images/brekkie.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Nourishments')}>
              <Image
              // style={styles.button}
              source={require('../assets/Images/nourish.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Potions')}>
              <Image
              // style={styles.button}
              source={require('../assets/Images/potions.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
                <Button
                color= '#E8A391'
                title="Show Me the Yum"
                onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    topContainer: {
      paddingTop: 50,
      flex: .5,
    },
    middleContainer: {
      flex: 5,
    },
    bottomContainer: {
      paddingTop: 60,
        flex: 1,
        
    },
    buttonContainer: {
        borderColor: '#E8A391',
        borderWidth: 1,
        paddingTop: 5,
        width: 268,
        paddingBottom: 5,
    },
    Button: {

    },
    subContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 147,
      height: 147,
      padding: 0,
      margin: 0,
    }
  });
