import {combineReducers} from 'redux';
import auth from './auth_reducer';
import recipes from './recipe_reducer';

const rootReducer = combineReducers({
  auth,
  recipes,
});
export default rootReducer;
