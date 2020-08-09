import { combineReducers } from 'redux';
import { formValues } from './formValues'
import { weatherReducer } from './fetching'

const rootReducer = combineReducers({
  formValues,
  weatherReducer
});

export default rootReducer;