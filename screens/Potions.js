import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function Potions({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#173D3D'}}>
        <Text>potions</Text>
        {/* <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}>
            <Image style={styles.logo}source={require('../assets/Images/logo.png')}></Image>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
                <Button
                color= '#E8A391'
                title="Show Me the Yum"
                onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View> */}
      </View>
    );
  }

//   const styles = StyleSheet.create({
//     topContainer: {
//       flex: 3,
//     },
//     middleContainer: {
//       flex: 4,
//     },
//     bottomContainer: {
//         flex: 1,
        
//     },
//     buttonContainer: {
//         borderColor: '#E8A391',
//         borderWidth: 1,
//         paddingTop: 5,
//         paddingBottom: 5,
//         paddingLeft: 15,
//         paddingRight: 15,
//     },
//     Button: {

//     }
//   });