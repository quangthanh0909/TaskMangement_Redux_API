import React from "react";

const Sort = ({onSort=f=>f}) => {

  return (
    <div className="justify-content-center">
      <div className="dropdown open">
        <button
          className="btn btn-light dropdown-toggle btn-block"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <button className="dropdown-item" href="#" name='name' value='name.1' onClick={(e)=>onSort(e.target.value)}>
            A-Z Name
          </button>
          <button className="dropdown-item" href="#" name='name' value='name.-1' onClick={(e)=>onSort(e.target.value)}>
            Z-A Name
          </button>
          <button className="dropdown-item" href="#" name='status' value='status.1' onClick={(e)=>onSort(e.target.value)}>
            Active
          </button>
          <button className="dropdown-item" href="#" name='status' value='status.-1' onClick={(e)=>onSort(e.target.value)}>
            Disactive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sort;
