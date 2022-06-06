import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import car from './car';

export default combineReducers({
  auth,
  message,
  car,
});
