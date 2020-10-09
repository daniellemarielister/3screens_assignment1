import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// food menu

const Stack = createStackNavigator();

export default function Nourishments({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5B55C', padding: 30,}}>
        <ScrollView>
        <View style={styles.top}>
            <Image source={require('../assets/Images/nourishWord.png')}></Image>
        </View>
        <View style={styles.menuItems}>
            <Text style={styles.categorey}>shareables</Text>

            <Text style={styles.title}>going gyoza’s</Text>
            <Text style={styles.body}>veggie and pork gyoza, pan fried with a sweet and sour sauce.</Text>
            <Text style={styles.price}>12.56</Text>

            <Text style={styles.title}>the pre-party</Text>
            <Text style={styles.body}>combination of buffalo cauli bites, zucchini parm sticks and stuffed mushrooms.</Text>
            <Text style={styles.price}>18.23</Text>

            <Text style={styles.title}>goats going blue</Text>
            <Text style={styles.body}>blueberry balsamic goat cheese spread flavoured with rosemary and honey with french bread to dip.</Text>
            <Text style={styles.price}>15.89</Text>

            <Text style={styles.title}>aussie açai bowl</Text>
            <Text style={styles.body}>thirst quenching açai bowl toped with fresh fruit, granola, chia, peanut butter and cocoa nibs.</Text>
            <Text style={styles.price}> 14.23</Text>

            <Text style={styles.title}>charcuterie</Text>
            <Text style={styles.body}>local ham, sausage, cheese and of course brunost (Norwegian caramel goat cheese) with artisan crackers.</Text>
            <Text style={styles.price}> 19.56</Text>

            <Text style={styles.categorey}>Meals</Text>

            <Text style={styles.title}>zesty zoodles</Text>
            <Text style={styles.body}>zuchinni noodles with garden pesto, pine nuts and chicken.</Text>
            <Text style={styles.price}>19.56</Text>

            <Text style={styles.title}>spana-ko-pita</Text>
            <Text style={styles.body}>wholesome greek classic, ‘spinach pie’. Layers of phyllo with a side of tzatziki.</Text>
            <Text style={styles.price}>19.56</Text>

            <Text style={styles.title}>eggplant parmesan</Text>
            <Text style={styles.body}>breaded and fried eggplant, egg, ricotta cheese, topped with marinara and parmesan.</Text>
            <Text style={styles.price}>17.11</Text>

            <Text style={styles.title}>mountain bowl</Text>
            <Text style={styles.body}>quinoa (soy sauce, cashews, shiitake mushrooms), corn, sweet potato, arugula, cucumber, harissa, lemon, olive oil.</Text>
            <Text style={styles.body}>16.81</Text>
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