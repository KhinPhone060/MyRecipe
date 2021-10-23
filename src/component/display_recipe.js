import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
} from 'react-native';
import {Card, Button, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipe} from '../store/actions';
import axios from 'axios';

const DisplayRecipe = () => {
  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  return (
    <View>
      <Input placeholder="Hello" />
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
