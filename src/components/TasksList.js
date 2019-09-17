import React,{useState,useEffect} from 'react';
import TaskItem from './TaskItem';
import Sort from './Sort';
import {connect} from 'react-redux'

const TasksList = ({tasks}) => {
  let [controlInput,SetControlInput] = useState({search:"",status:"",sort:""});
  let [newTasks,SetnewTasks] = useState(tasks);
  
  useEffect(() => {
     SetnewTasks(newtask(tasks));
     
  },[controlInput,tasks])

  let newtask = (tasks) => {
      return Sortfun(SearchStatus(SearchName(tasks)))
  }
  const onChange = ({target}) => {
      SetControlInput({...controlInput,[target.name]:target.value});
  }

  const onSort = (value) => {
    SetControlInput({...controlInput,sort:value})
  }

  const SearchName = (tasks) => {
    if(controlInput.search.length>0){
      return tasks.filter((task) => {
         return (task.name.toUpperCase().indexOf(controlInput.search.toUpperCase()) !== -1)
      })
    }
    else return tasks;
  }

  const SearchStatus = (tasks) => {
    const searchStatus = controlInput.status;
    if (searchStatus.length>0) {
        return tasks.filter((task) => {
          return searchStatus === "0"? task: searchStatus ==="1"?task.status : !task.status;
        })
     }  
     else return tasks
  }

  const Sortfun = (tasks) => {
    const {sort} = controlInput
     if (sort.length>0) {
        const namesort = sort.split('.')[0];
        const valuesort = parseInt(sort.split('.')[1]);
        
        if (namesort ==="name") {
          return [...tasks].sort((a,b) => {
            if(a.name.toUpperCase() < b.name.toUpperCase()) { return -1*valuesort; }
            if(a.name.toUpperCase() > b.name.toUpperCase()) { return 1*valuesort;; }
            return 0;
          })
        } else {
            return [...tasks].sort((a,b) => {
            return (a.status === b.status)? 0 : a.status? -1*valuesort : 1*valuesort;
          });
        }
    }
     return tasks;
  }
 
  return (
    <div className="row">
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>No.</th>
                                 <th>Task Name</th>
                                 <th>Status</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td></td>
                                 {/* Search */}
                                 <td><input className="form-control" type="text" placeholder="Search" name="search" onChange={onChange}/></td>
                                 {/* Status Selection */}
                                 <td>
                                     <div className="form-group">
                                        <select className="form-control" name="status" id="" onChange={onChange}>
                                            <option value={0}>All</option>
                                            <option value={1}>Active</option>
                                            <option value={-1}>Disactive</option>
                                        </select>
                                    </div>
                                </td>
                                 {/* Sort */}
                                <td>
                                   <Sort onSort ={onSort}/>
                                </td>
                             </tr>
                               {newTasks.map((task,index) => 
                                    <TaskItem 
                                        key={task.id}
                                        index = {index}
                                        {...task}
                                    >
                                </TaskItem>
                               )}
                         </tbody>
                     </table>
                </div>
  )
}
const mapStateToProps = (state) =>{
  return {
    tasks : state.tasks
  }
}
// const mapDispatchToProps ={
 
// }
export default connect(mapStateToProps)(TasksList);