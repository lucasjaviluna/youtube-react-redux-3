import { combineReducers } from "redux";
import users from './users';

import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
//
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  users: users
});


export function reducerCall(state, action, reducerClass) {
  const [, method] = action.type.split('.');

  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if ('length' !== name && 'name' !== name && 'proptotype' !== name) {
      return name;
    }
  });

  //check if the action exists
  if (methods.find(x => x === method)) {
    const newState = cloneObject(state);

    return reducerClass[method](newState, action);
  } else {
    return state;
  }
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}
