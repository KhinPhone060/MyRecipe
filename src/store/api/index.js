import axios from 'axios';
import auth from '@react-native-firebase/auth';

export const registerUser = async ({email, password}) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({email, password}) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const LogoutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};
