import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {displayTaskForm, createTask,editTask} from '../redux/actions/taskActions'

function AddTask({displayTask, addTask,editingTask,editTask}) {
   const [task,setTask] = useState(editingTask.id?{...editingTask}:{name:"",status:false});
    useEffect(() => {
       setTask(editingTask.id?{...editingTask}:{name:"",status:false});
    },[editingTask])
   const onChange = ({target}) => {
      setTask({
        ...task,
        [target.name]:target.value
      })
   }
   const handleSaveTask = ()=>{
     if (task.name !=="" ) {
       task.id? editTask(task) : addTask(task) ; 
       console.log(task);
       
       setTask({name:"",status:false});
       displayTask(false)
      }
   }
return (
    <div className="card">
    <div className="card-header text-center">
        {task.id?"Edit Task":"Add Tasks"}
        <span className="fa fa-window-close float-right" aria-hidden="true" onClick={()=>{displayTask(false)}}></span>
    </div>

    <div className="card-body">
        <div className="form-group">
            <label htmlFor="name">Task Name</label>
            <input type="text" 
                   className="form-control" 
                   name="name" id="name"
                   placeholder=""
                   value = {task.name}
                   onChange = {onChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" name="status" id="status"   onChange = {onChange} value = {task.status} >
            <option value={true}>Active</option>
            <option value={false}>Disactive</option>
          </select>
        </div>
        <button className="btn btn-primary float-left" onClick={handleSaveTask}> 
              <span className="fa fa-plus" aria-hidden="true">&nbsp;</span>
              Save
        </button>
        <button className="btn btn-danger float-right" onClick={()=>{displayTask(false)}}>
             <span className="fa fa-close" aria-hidden="true">&nbsp;</span>
             Cancel
        </button>
    </div>
    </div>
)
}
function mapStateToProps(state){
   if(state.editingTask){
     console.log("ok");
     
   };
   
  return {
    displayTaskForm : state.displayTaskForm,
    editingTask : state.editingTask
  }
};
const mapDispatchToProps = {
   displayTask : displayTaskForm,
   addTask : createTask,
   editTask : editTask
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);