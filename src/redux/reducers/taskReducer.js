import * as types from '../actions/actionTypes'
import initialState from './initialState';

export  default function taskReducer(state=initialState.tasks,action){
  switch (action.type){
    case types.ADD_TASK:
      return [...state,action.task];
    case types.EDIT_TASK:
      return [...state].map((task) => {
        if(task.id === action.task.id) return {...task,...action.task};
        else return task;
      });
    case types.DELETE_TASK:
      return [...state].filter((task) => task.id !== action.id);

    default:
      return state;
  }
}