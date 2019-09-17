import * as types from './actionTypes';
import v4 from 'uuid/v4';

export function createTask(task){
  return {
    type : types.ADD_TASK,
    task : {
      ...task, 
      status: task.status==="true"?true:false,
      id: v4(),
    }
  }
}

export function displayTaskForm(displayStatus){
  return {
    type: types.DISPLAY_TASKFORM,
    status : displayStatus
  }
}

export function editingTask(editingTask){
  return {
    type: types.EDITING_TASK,
    
    editingTask :{...editingTask}
  }
}

export function editTask(task){
  return {
    type : types.EDIT_TASK,
    task : {...task}
  }
}

export function deleteTask(id){
  return {
    type : types.DELETE_TASK,
    id
  }
}
