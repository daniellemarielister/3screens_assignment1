import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// breakfast menu

const Stack = createStackNavigator();

export default function Brekkie({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5B55C', padding: 30,}}>
        <ScrollView>
        <View style={styles.top}>
            <Image source={require('../assets/Images/brekkieWord.png')}></Image>
        </View>
        <View style={styles.menuItems}>
            <Text style={styles.title}>the goats go to</Text>
            <Text style={styles.body}>two sunny eggs, spiced potatoes, bacon lardons, spiced tomato sauce, garlic aioli.</Text>
            <Text style={styles.price}>15.89</Text>

            <Text style={styles.title}>bettie’s brioche</Text>
            <Text style={styles.body}>brioche rench toast with cream cheese & strawberry mousse.</Text>
            <Text style={styles.price}>12.56</Text>

            <Text style={styles.title}>benny benny</Text>
            <Text style={styles.body}>the classic egg’s benny doused in hollandaise with Montreal smoked meat on an English muffin side hash and fruit.</Text>
            <Text style={styles.price}>15.89</Text>

            <Text style={styles.title}>aussie açai bowl</Text>
            <Text style={styles.body}>thirst quenching açai bowl toped with fresh fruit, granola, chia, peanut butter and cocoa nibs.</Text>
            <Text style={styles.price}>13.99</Text>

            <Text style={styles.categorey}>sunday scaries elixirs</Text>

            <Text style={styles.title}>the fix me up</Text>
            <Text style={styles.body}>coldpressed ginger, turmeric, celery, orange, mango and wheatgrass.</Text>
            <Text style={styles.price}>6.23</Text>

            <Text style={styles.title}>cup of charcoal</Text>
            <Text style={styles.body}>cup of charcoal charcoal mushroom latte with oat milk </Text>
            <Text style={styles.price}>6.23</Text>

            <Text style={styles.title}>golden milk</Text>
            <Text style={styles.body}>turmeric with oat milk and mct oil.</Text>
            <Text style={styles.body}>6.23</Text>
        </View>
        
      </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    top : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    menuItems: {
        
        padding: 30,
        borderColor: '#173D3D',
        borderWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 10,
        color: '#173D3D',
    },
    body: {
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
        paddingBottom: 5,
        color: '#173D3D',
    },
    price: {
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
        paddingBottom: 50,
        color: '#173D3D',
    },
    categorey: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingBottom: 30,
        color: '#173D3D',
    }

    
  });