import initialState from "./initialState";
import * as types from '../actions/actionTypes';

export default function editingTask(state = initialState.editingTask,action){
    switch (action.type) {
      case types.EDITING_TASK:
        return {...action.editingTask};
        
      default:
        return state;
    }
}