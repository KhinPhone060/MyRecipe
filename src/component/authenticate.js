import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Modal, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Register, Login} from '../store/actions';

const AuthScreen = () => {
  const [register, setregister] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const authentication = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <View>
      <Modal animationType="slide" visible={register}>
        <SafeAreaView>
          <Input
            onChangeText={userEmail => setEmail(userEmail)}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            onChangeText={userPassword => setPassword(userPassword)}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            title="Sign Up"
            onPress={() => dispatch(Register(email, password))}
          />
        </SafeAreaView>
      </Modal>
      <Text>Create an account</Text>
      <Input
        onChangeText={userEmail => setEmail(userEmail)}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        onChangeText={userPassword => setPassword(userPassword)}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Sign In"
        onPress={() => dispatch(Login(email, password))}
      />
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => setregister(true)}>
        <Text>Don't have an account? Sign Up here</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthScreen;
