import {combineReducers} from 'redux';
import tasks from './taskReducer';
import displayTaskForm from './displayTaskForm.Reducer';
import editingTask from './editingTask.Reducer'

const rootReducer = combineReducers({tasks,displayTaskForm,editingTask});

export default rootReducer;