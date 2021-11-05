import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import {Input, Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const AuthScreen = () => {
  const [register, setRegister] = useState(false);
  const handleSubmit = async ({email, password}) => {
    try {
      if (register) {
        //register
        await auth().createUserWithEmailAndPassword(email, password);
      } else {
        //log in
        alert('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleSubmit(values)}>
        {({handleChange, handleBlur, values}) => (
          <View style={{padding: '10%'}}>
            <Modal animationType="slide" visible={register}>
              <SafeAreaView>
                <Input
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Input
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Button title="Sign Up" onPress={handleSubmit} />
              </SafeAreaView>
            </Modal>
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button title="Sign In" onPress={handleSubmit} />
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => setRegister(true)}>
              <Text>Don't have an account? Sign Up here</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};
export default AuthScreen;
