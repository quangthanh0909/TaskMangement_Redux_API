import React  from 'react';
import './App.css';
import AddTask from './AddTask';
import TasksList from './TasksList';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions/taskActions';


function App({tasks,displayTaskForm,displayTask,editingTask}) {
  const handleAddTask = () => {
     editingTask(null);
     displayTask(true);

  }
    
  return (
    <div className="container my-3">
      <h3 className="text-center mb-3">Task Management
        <span className="text-small">
          <a href="https://github.com/quangthanh0909/Task-Management"> ---Github --</a>
        </span>
      </h3>

      <div className="row justify-content-center">
        <div className={displayTaskForm ? "col-sm-12 col-md-4" : ""}>
          {(!displayTaskForm) ? "" : <AddTask/> }
        </div>

        {/* <!-- Task Control --> */}
        <div className={displayTaskForm ? "col-sm-12 col-md-8" : "col-sm-12"}>
          <div className="row">
              <button className="btn btn-primary my-3 float-left" onClick={handleAddTask}>
              <span className="fa fa-plus" aria-hidden="true"></span>
               Add Task
              </button>      
          </div>
          <TasksList/>

                  
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state){
   return {
     tasks : state.tasks,
     displayTaskForm : state.displayTaskForm,
     
   }
}
const mapDispatchToProps = {
  displayTask : Actions.displayTaskForm,
  editingTask : Actions.editingTask

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
