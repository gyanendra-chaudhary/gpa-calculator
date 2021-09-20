import React from "react";

function Course(props) {
  const data = () => {
    switch (props.data) {
      case "management":
        <div className="dropdown">
          <label htmlFor="level">Choose a Course:&nbsp;&nbsp;</label>
          <select className="btn border" name="course" id="course">
            <option className="dropdown-item">BBS</option>
            <option className="dropdown-item">BBA</option>
            <option className="dropdown-item">BCA</option>
            <option className="dropdown-item">MBA</option>
          </select>
        </div>;
        break;
    }
  };
  return <div className="course">{data}</div>;
}
export default Course;
