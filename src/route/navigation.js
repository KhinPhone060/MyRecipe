import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DisplayRecipe from '../component/display_recipe';
import Favorite from '../component/favorite';
import AddRecipe from '../component/add_recipe';
import Profile from '../component/profile';
import Setting from '../component/setting';

const Tab = createBottomTabNavigator();

const CustomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fffffff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen name="Home" component={DisplayRecipe} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="AddRecipe" component={AddRecipe} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
export default CustomTab;
