import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menus from '../screens/Details';
import { Component } from 'react';

// Initial Screen

const Stack = createStackNavigator();

class ImageLoader extends Component {
  // aniation for logo
  state = {
    opacity: new Animated.Value(0),

  }

  onload = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onload}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1.5,1],
                })

                // translateY: this.state.opacity.interpolate({
                //   inputRange: [0, 1],
                //   outputRange: [50, 0],
                // })
              }
            ]
          },
          this.props.style,
        ]}
      />
    )
  }
}


export default function HomeScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#173D3D'}}>
        <View style={styles.topContainer}></View>
        
        <View style={styles.middleContainer}>
        <ImageLoader style={styles.logo}source={require('../assets/Images/logo.png')}></ImageLoader>

            
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
                <Button
                color= '#E8A391'
                title="Show Me the Yum"
                onPress={() => navigation.navigate('Menus')}
                />
            </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    topContainer: {
      flex: 3,
    },
    middleContainer: {
      flex: 4,
    },
    bottomContainer: {
        flex: 1,
        
    },
    buttonContainer: {
        borderColor: '#E8A391',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        width: 268,
    },
    Button: {

    }
  });