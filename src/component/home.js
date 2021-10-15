import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CustomTab from '../route/navigation';

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <CustomTab />
    </NavigationContainer>
  );
};
export default HomeScreen;
