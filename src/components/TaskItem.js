import React from "react";

const TaskItem = ({ name, status, id , index, EditTask = f=>f ,DelTask=f=>f,ChangeStatus=f=>f}) => {
  return (
    <tr>
      <td>{index +1 }</td>
      <td>{name}</td>
      <td className="text-center">
        <span className={status?"btn btn-success":"btn btn-light"} onClick={()=>ChangeStatus(id)}>{(status)?"Active":"Disactive"}</span>
      </td>
      <td className="text-center">
        <button className="btn btn-warning text-light" onClick={()=>EditTask(id)}>
          <i className="fa fa-pencil" aria-hidden="true">
            &nbsp;
          </i>
          Edit
        </button>
        <button className="btn btn-danger text-light ml-3" onClick={()=>DelTask(id)}>
          <i className="fa fa-trash-o" aria-hidden="true">
            &nbsp;
          </i>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
