import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';

const Profile = () => {
  return (
    <ScrollView>
      <Input
        placeholder="Email"
        value={''}
        onChangeText={text => console.log('hey')}
      />
      <Input placeholder="Password" />
    </ScrollView>
  );
};
export default Profile;
