import React from "react";

function Course() {
  return (
    <div className="course">
      <div className="dropdown">
        <label for="level">Choose a Course:&nbsp;&nbsp;</label>
        <select className="btn border" name="course" id="course">
          <option className="dropdown-item">BBS</option>
          <option className="dropdown-item">BBA</option>
          <option className="dropdown-item">BCA</option>
          <option className="dropdown-item">MBA</option>
        </select>
      </div>
    </div>
  );
}
export default Course;
