import React from "react";

function Faculty() {
  return (
    <div className="faculty">
      <div className="dropdown">
        <label for="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
        <select className="btn border" name="faculty" id="faculty">
          <option className="dropdown-item">Management</option>
          <option className="dropdown-item">Science</option>
          <option className="dropdown-item">Education</option>
          <option className="dropdown-item">Art</option>
        </select>
      </div>
    </div>
  );
}

export default Faculty;
