import React from "react";

function Faculty(props) {
  return (
    <div className="faculty">
      <div className="dropdown">
        <label htmlFor="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
        <select className="btn border" name="faculty" id="faculty">
          {/* <option className="dropdown-item">Science</option>   */}
          {props.data.forEach((element) => {
            <option className="dropdown-item">{element}</option>;
          })}
          {console.log(props.data)}
        </select>
      </div>
    </div>
  );
}

export default Faculty;
