import React, {useState,useEffect} from 'react';


function AddTask({GetTask, CancelTask,name,id=null,status}) {
  let [task,setTask] = useState({name:"", status:false});

  useEffect(() => {
    if(id)      
    {
      setTask({name:name,
              status:status,
              id:id
             });  
    }else{
      setTask({name:"",
        status:false,
        id:""
       });  
    }
  },[id,name,status])
  
  const onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value=target.value;
    if (name ==='status' ) {
        value = (value === undefined || value === "false")?false:true;
    }
     
    setTask({...task,[name]:value});
  }
 
  const onClick = () => {
    if (task.status === undefined) {
      
    }
    if(typeof task.name =="string"){
      GetTask(task)
    }
  }
 
   
return (
    <div className="card">
    <div className="card-header text-center">
        {id?"Edit Task":"Add Tasks"}
        <span className="fa fa-window-close float-right" aria-hidden="true" onClick={()=>CancelTask()}></span>
    </div>

    <div className="card-body">
        <div className="form-group">
            <label htmlFor="name">Task Name</label>
            <input type="text" 
                   className="form-control" 
                   name="name" id="name"
                   onChange={onChange}
                   value={task.name}
                   placeholder=""/>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" name="status" id="status" onChange={onChange} value={task.status} >
            <option value={true}>Active</option>
            <option value={false}>Disactive</option>
          </select>
        </div>

        <button className="btn btn-primary float-left" onClick={onClick}> 
              <span className="fa fa-plus" aria-hidden="true">&nbsp;</span>
              Save
        </button>
        <button className="btn btn-danger float-right" onClick={()=>CancelTask()}>
             <span className="fa fa-close" aria-hidden="true">&nbsp;</span>
             Cancel
        </button>
    </div>
    </div>
)
}

export default AddTask;