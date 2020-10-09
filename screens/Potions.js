import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// drinks menu

const Stack = createStackNavigator();

export default function Potions({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5B55C', padding: 30,}}>
        <ScrollView>
        <View style={styles.top}>
            <Image source={require('../assets/Images/potionsWord.png')}></Image>
        </View>
        <View style={styles.menuItems}>
            <Text style={styles.categorey}>potions</Text>

            <Text style={styles.title}>the drunken goat</Text>
            <Text style={styles.body}>cold pressed grapefruit juice, pink gin, grenadine and sprite. Topped with dried rose petals.</Text>
            <Text style={styles.price}>9.52</Text>

            <Text style={styles.title}>golden goat</Text>
            <Text style={styles.body}>a moscow mule with a twist. Topped with gold flakes.</Text>
            <Text style={styles.price}>9.52</Text>

            <Text style={styles.title}>Mountain Martini</Text>
            <Text style={styles.body}>a classic dirty martini with artisan with topshelf gin or vodka</Text>
            <Text style={styles.price}>8.23</Text>

            <Text style={styles.title}>mojo mojito</Text>
            <Text style={styles.body}>boost your mojo with a spin on the classic mojito with raspberry and a subtle hint of ginger.</Text>
            <Text style={styles.price}>8.63</Text>

            <Text style={styles.title}>the tipsy saanen</Text>
            <Text style={styles.body}>kirschwasser cherry brandy, suze gentian liquor, yellow chartruese liquor and lemon juice on the rocks with a sugar coated rim.</Text>
            <Text style={styles.price}> 7.35</Text>

            <Text style={styles.title}>mountain slide</Text>
            <Text style={styles.body}>topshelf vodka with coffee liqueur, Bailey's, sweetened condensed goat milk and chocolate shavings.</Text>
            <Text style={styles.price}> 10.23</Text>

            <Text style={styles.categorey}>Wine - wine selection changes daily</Text>

            <Text style={styles.title}>house white or red 6oz</Text>
            <Text style={styles.price}>10.23</Text>

            <Text style={styles.title}>pinot grigio</Text>
            <Text style={styles.price}>13.45</Text>

            <Text style={styles.title}>savingion blanc</Text>
            <Text style={styles.price}>14.24</Text>

            <Text style={styles.title}>reisling</Text>
            <Text style={styles.price}>12.35</Text>

            <Text style={styles.title}>malbec</Text>
            <Text style={styles.price}>13.83</Text>

            <Text style={styles.title}>cabernet sauvignon</Text>
            <Text style={styles.price}>12.35</Text>

            <Text style={styles.title}>merlot</Text>
            <Text style={styles.price}>13.11</Text>

            <Text style={styles.title}>pinot noir</Text>
            <Text style={styles.price}>12.34</Text>

            <Text style={styles.categorey}>beer</Text>

            <Text style={styles.title}>mountain hero</Text>
            <Text style={styles.body}>the spicy French-Belgian yeast character mingles with citrus hops to create a refreshing, dry, and drinkable Saison.</Text>
            <Text style={styles.body}>6.34</Text>

            <Text style={styles.title}>pingo pale ale</Text>
            <Text style={styles.body}>the perfect everyday West Coast style pale ale. Aromas of a freshly peeled orange, and a flavour like biting into a juicy tangerine.</Text>
            <Text style={styles.body}>6.34</Text>

            <Text style={styles.title}>weekend warrior IPA</Text>
            <Text style={styles.body}>there's nothing better than enjoying an IPA after an awesome weekend adventure. This IPA hits the spot with big citrus and grapefruit notes. Before you know it you'll be planning your next weekend adventure in no time.</Text>
            <Text style={styles.body}>7.74</Text>

            <Text style={styles.title}>sweater weather</Text>
            <Text style={styles.body}>outmeal stout with hints of chocolate and espresso.</Text>
            <Text style={styles.body}>5.34</Text>


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