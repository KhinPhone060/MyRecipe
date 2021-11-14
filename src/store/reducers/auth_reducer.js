const INITIAL_STATE = {
  user: [],
  isAuth: false,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REGISTER_USER':
      return {...state, ...action.payload};
    case 'LOGIN_USER':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
