import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './AddTask';
import TasksList from './TasksList';
import dataSample from '../data/taskSample.json';
const v4 = require('uuid/v4');


function App() {
  let [displayTaskForm, setTaskFrom] = useState(false);
  let [tasks, setTasks] = useState(getTaskData() ? getTaskData() : dataSample);
  let [editingTask, setEditing] = useState(null);
  
  const ShowTaskForm = () => {
    setTaskFrom(!displayTaskForm);
  }
  //UseEffect
     // Update Tasks into localstorage
      useEffect(() => {
          setlocalStorage(tasks);
     
      }, [tasks])
     // Update Sorted Data
     

  
  // update when customer Edit Task
  const EditTask = (id) => {
    setTaskFrom(true);
    const task = tasks.find((task) => task.id === id);
    setEditing(task);
  }
  // update when customer Delete Task
  const DelTask = (id) => {
    const newtasks = tasks.filter(task => task.id !== id);
    setTasks(newtasks);
    setEditing(null);
  }

  // update when customer change status
  const ChangeStatus = (id) => {
     const updatetasks = tasks.map((task) => (task.id === id) ? {...task,status: !task.status } : task )
     setTasks(updatetasks);
  };

  // Updated input Task or Task edited
  const GetTask = (task) => {
    setTaskFrom(false);
    const { id, name, status } = task;
    let updatetasks = [];
    if (id) {
      updatetasks = tasks.map((task) =>
        (task.id === id) ? { id: id, name: name, status: status } : task    // Check if task edited or new ?
      )
    } else {
      updatetasks = [...tasks, { ...task, id: v4() }];
    }
       setTasks(updatetasks);
       setEditing(null);
  }

  // Using Local Storage
  function getTaskData() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return tasks
  }
  const setlocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  
   // OnSearch 
    
  return (
    <div className="container my-3">
      <h3 className="text-center mb-3">Task Management
        <span className="text-small">
          <a href="https://github.com/quangthanh0909/Task-Management"> ---Github --</a>
        </span>
      </h3>
      <div className="row justify-content-center">
        <div className={displayTaskForm ? "col-sm-12 col-md-4" : ""}>
          {/* Component */}
          {(!displayTaskForm) ? "" :
            <AddTask
              CancelTask={ShowTaskForm}
              GetTask={GetTask}
              {...editingTask}
              
            />
          }
        </div>
        {/* <!-- Task Control --> */}
        <div className={displayTaskForm ? "col-sm-12 col-md-8" : "col-sm-12"}>
          <div className="row">
              <button className="btn btn-primary my-3 float-left" onClick={() => { setTaskFrom(true); setEditing(null) }}>
              <span className="fa fa-plus" aria-hidden="true"></span>
              Add Task
              </button>      
          </div>

          {/* Component */}
         
          {/* Component */}
          <TasksList tasks={tasks} 
                     EditTask={EditTask}
                     DelTask={DelTask} 
                     ChangeStatus={ChangeStatus}
          ></TasksList>
          
        </div>
      </div>
    </div>

  );
}

export default App;
