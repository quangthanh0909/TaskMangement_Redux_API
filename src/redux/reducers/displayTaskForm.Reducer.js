import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function displayTaskForm(state = initialState.displayTaskForm,action){
  switch(action.type){
    case types.DISPLAY_TASKFORM :
      return action.status;
    default:
     return state;
  }
}