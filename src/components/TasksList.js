import React,{useState, useEffect} from 'react';
import TaskItem from './TaskItem';
import Sort from './Sort';

const TasksList = ({tasks,EditTask = f=>f,DelTask=f=>f,ChangeStatus=f=>f}) => {

  let [updateTasks,setUpdateTasks]  =useState(tasks);
  
   useEffect(() => {
      setUpdateTasks(tasks)       
   },[tasks]);
  
  
  
  const SortFunc = (name,valueStr) => {
    const newtasks = tasks.map((task) => task.status?{...task,statusStr:"Active"}:{...task,statusStr:"Disactive"} );   
    const value = parseInt(valueStr);
        const sortedTasks =  newtasks.sort((a,b) => {
          let nameA = a[name].toUpperCase(); // ignore upper and lowercase
          let nameB = b[name].toUpperCase(); // ignore upper and lowercase
          return (nameA === nameB)?0: (nameA<nameB)?-1*value:1*value;
          })
    setUpdateTasks(sortedTasks);
  }
  const onSort = (dataSearch) => {
      const data = dataSearch.split('.');
      const [name,value] = data;
      SortFunc(name,value);
  }

// Search Value 
   const onSearch = (event) => {
    let value = event.target.value;
    const searchedTasks = tasks.filter((task)=>
        (task.name.toUpperCase().indexOf(value.toUpperCase()) !==-1)  )
     setUpdateTasks(searchedTasks);
   }
 // Status Sort 

 const onStatus = (event) => {
    let value = event.target.value;
    const statusTask = tasks.filter((task) => ((value === "1" && task.status) || (value ==="-1" && !task.status) || value ==="0"))
    setUpdateTasks(statusTask);
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
                                 <td><input className="form-control" type="text" placeholder="Search" name="search" onChange={onSearch}/></td>
                                 {/* Status Selection */}
                                 <td>
                                     <div className="form-group">
                                        <select className="form-control" name="" id="" onChange={onStatus}>
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
                               {updateTasks.map((task,index) => 
                                    <TaskItem 
                                        key={task.id}
                                        index = {index}
                                        {...task}
                                        EditTask={EditTask}
                                        DelTask={DelTask}
                                        ChangeStatus={ChangeStatus}
                                        >
                                      </TaskItem>
                               )}
                         </tbody>
                     </table>
                </div>
  )
}

export default TasksList;