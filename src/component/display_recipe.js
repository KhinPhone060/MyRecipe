import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const DisplayRecipe = () => {
  return (
    <View>
      <Card containerStyle={{borderRadius: 25, ...styles.shadow}}>
        <Card.Title>Recipe Name</Card.Title>
        <Card.Divider />
        <Image
          style={{width: 330, height: 200, borderRadius: 20}}
          resizeMode="cover"
          source={{
            uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg',
          }}
        />
      </Card>
    </View>
  );
};
export default DisplayRecipe;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
