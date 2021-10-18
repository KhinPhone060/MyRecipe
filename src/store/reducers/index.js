import {combineReducers} from 'redux';
import auth from './auth_reducer';
import getRecipe from './recipe_reducer';

const rootReducer = combineReducers({
  auth,
  getRecipe,
});
export default rootReducer;
