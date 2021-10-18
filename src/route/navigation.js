/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DisplayRecipe from '../component/display_recipe';
import Favorite from '../component/favorite';
import AddRecipe from '../component/add_recipe';
import Profile from '../component/profile';
import Setting from '../component/setting';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {Colors} from '../utils/colors/colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.themeColor,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const CustomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: '#FAFAFA'}}
      backBehavior="initialRoute"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: Colors.white,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DisplayRecipe}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/home1.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.themeColor : Colors.grey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.themeColor : Colors.grey,
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
          headerStyle: {
            height: 100,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            backgroundColor: '#FAFAFA',
          },
          headerTitleAlign: 'left',
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/heart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.themeColor : Colors.grey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.themeColor : Colors.grey,
                  fontSize: 12,
                }}>
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              resizeMode="center"
              style={{
                width: 30,
                height: 30,
                tintColor: Colors.white,
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.themeColor : Colors.grey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.themeColor : Colors.grey,
                  fontSize: 12,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/gear.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.themeColor : Colors.grey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.themeColor : Colors.grey,
                  fontSize: 12,
                }}>
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default CustomTab;

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
