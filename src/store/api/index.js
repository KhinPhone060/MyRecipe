import auth from '@react-native-firebase/auth';

export const registerUser = async ({email, password}) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const {user} = response;
    const userProfile = {
      uid: user.uid,
      email: email,
    };
    return {isAuth: true, user: userProfile};
  } catch (error) {
    return {error: error.message};
  }
};

export const loginUser = async ({email, password}) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return {isAuth: true};
  } catch (error) {
    return {error: error.message};
  }
};

export const LogoutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};
