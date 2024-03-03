import * as React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Images = {
  backyard: require('./backyard.png'),
  bedroom: require('./bedroom.png'),
  frontyard: require('./frontyard.png'),
  kitchen: require('./kitchen.png'),
  livingroom: require('./livingroom.png'),
  office: require('./office.png'),
};

function Navbar() {
  return (
    <View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: '3%',
        borderRadius: 60,
        ...styles.dgreen,
      }}>
      <Text>Bar</Text>
    </View>
  );
}

function PlantCard({img, label}) {
  return (
    <View style={styles.singleItem}>
      <View
        style={{
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.lgreen,
        }}>
        <View
          style={{
            width: '80%',
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image style={{width: 50, height: 50}} source={img} />
          <Text>{label}</Text>
        </View>
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{height: '100%'}}>
      <View>
        <View style={{width: '100%', height: '37%', ...styles.dgreen}} />
        <View style={{width: '100%', height: '63%', ...styles.lgreen}} />
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: '8%',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          height: '85%',
          width: '80%',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            margin: 8,
            fontSize: 28,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Your Virtual Garden
        </Text>
        <View style={styles.itemsWrap}>
          <PlantCard img={Images.bedroom} label="Bedroom" />
          <PlantCard img={Images.kitchen} label="Kitchen" />
          <PlantCard img={Images.livingroom} label="Living Room" />
          <PlantCard img={Images.frontyard} label="Frontyard" />
          <PlantCard img={Images.office} label="Office" />
          <PlantCard img={Images.backyard} label="Backyard" />
        </View>
      </View>
      <Navbar />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello!"
          component={HomeScreen}
          options={{
            headerTitle: () => {
              return (
                <Text
                  style={{
                    color: 'white',
                    marginTop: 30,
                    fontSize: 36,
                    fontWeight: 'bold',
                  }}>
                  Hello!
                </Text>
              );
            },
            headerStyle: {
              ...styles.dgreen,
            },
            headerShadowVisible: false,
            headerTintColor: {
              color: '#fff',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
              fontSize: 36,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const {width} = Dimensions.get('window');
const gap = 50;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = '30%'; ///(windowWidth - totalGapSize) / itemPerRow;
const styles = StyleSheet.create({
  lgreen: {
    backgroundColor: '#A8DFC5',
  },
  dgreen: {
    backgroundColor: '#0A5D35',
  },
  itemsWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  singleItem: {
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});

export default App;
