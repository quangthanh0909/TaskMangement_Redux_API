import React from "react";
import {connect} from 'react-redux'
import {editingTask, displayTaskForm,deleteTask} from '../redux/actions/taskActions'
const TaskItem = ({ name, status, id ,index,editTask, displayTask,deleteTask}) => {
  const handleEditTask = () => {
     editTask({id,name,status});
     displayTask(true);
  }
  return (
    <tr>
      <td>{index +1 }</td>
      <td>{name}</td>
      <td className="text-center">
        <span className={status?"btn btn-success":"btn btn-light"}> {(status)?"Active":"Disactive"}</span>
      </td>
      <td className="text-center">
        <button className="btn btn-warning text-light" onClick={handleEditTask}>
          <i className="fa fa-pencil" aria-hidden="true">
            &nbsp;
          </i>
          Edit
        </button>
        <button className="btn btn-danger text-light ml-3" onClick={() => {
          deleteTask(id)
        }}>
          <i className="fa fa-trash-o" aria-hidden="true">
            &nbsp;
          </i>
          Delete
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps ={
  editTask : editingTask,
  displayTask : displayTaskForm,
  deleteTask : deleteTask
}
const mapStateToProps = (state) => {
   return {

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
