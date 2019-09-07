import React from "react";
import Search from "./Search";
import Sort from "./Sort";

const Control = ({OnSort=f=>f,OnSearch=f=>f}) => {
  return (
    <div className="row my-3">
      <Search OnSearch={OnSearch}></Search>
      <Sort Sort={OnSort}></Sort>
    </div>
  );
};

export default Control;
