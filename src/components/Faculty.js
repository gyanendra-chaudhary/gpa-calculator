import React from "react";
import data from "../mydata";

function Faculty(props) {
  console.log(props);
  const faculties = () => {
    if (props.level === "+2") {
      data.neb.faculty.map((val) => {
        <option className="dropdown-item">{val}</option>;
      });
    }
  };
  return (
    <div className="faculty">
      <div className="dropdown">
        <label htmlFor="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
        <select className="btn border" name="faculty" id="faculty">
          {/* <option className="dropdown-item">Science</option>   */}
        </select>
      </div>
    </div>
  );
}

export default Faculty;
