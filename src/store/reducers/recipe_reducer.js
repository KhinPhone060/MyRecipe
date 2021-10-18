export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_RECIPE':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
