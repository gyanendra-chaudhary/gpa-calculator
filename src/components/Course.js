import React,{useState} from "react";

function Course(props) {
  const [course,setCourse]=useState("");
  function handleCourse(e){
    console.log(e.target.value);
    setCourse(e.target.value);
    
  }
  console.log(course)
  return (
    <div>
      <div className="dropdown">
        <label htmlFor="faculty" style={{"fontSize":"1.2rem"}}>Choose a Faculty:&nbsp;&nbsp;</label>
        <select className="btn border" style={{"fontSize":"1.2rem"}} name="faculty" id="faculty" value={course} onClick={handleCourse}>
          {props.faculty === "engineering" ? (
            <>
              <option className="dropdown-item">Engineering</option>
              <option className="dropdown-item">Engineering</option>
              <option className="dropdown-item">Engineering</option>
              <option className="dropdown-item">Engineering</option>
              <option className="dropdown-item">Engineering</option>
            </>
          ) : props.faculty === "scienceTech" ? (
            <>
              <option className="dropdown-item">Science and Technology</option>
              <option className="dropdown-item">Science and Technology</option>
              <option className="dropdown-item">Science and Technology</option>
              <option className="dropdown-item">Science and Technology</option>
            </>
          ) : props.faculty === "management" ? (
            <>
              <option className="dropdown-item">Management</option>
              <option className="dropdown-item">Management</option>
              <option className="dropdown-item">Management</option>
              <option className="dropdown-item">Management</option>
            </>
          ) : props.faculty === "education" ? (
            <>
              <option className="dropdown-item">Education</option>
              <option className="dropdown-item">Education</option>
              <option className="dropdown-item">Education</option>
              <option className="dropdown-item">Education</option>
            </>
          ) : props.faculty === "medicine" ? (
            <>
              <option className="dropdown-item">Medicine</option>
              <option className="dropdown-item">Medicine</option>
              <option className="dropdown-item">Medicine</option>
              <option className="dropdown-item">Medicine</option>
            </>
          ) : props.faculty === "humSs" ? (
            <>
              <option className="dropdown-item">
                Humanities and Social Science
              </option>
              <option className="dropdown-item">
                Humanities and Social Science
              </option>
              <option className="dropdown-item">
                Humanities and Social Science
              </option>
              <option className="dropdown-item">
                Humanities and Social Science
              </option>
            </>
          ) : props.faculty === "agAs" ? (
            <>
              <option className="dropdown-item">
                Agriculture and Animal Science
              </option>
              <option className="dropdown-item">
                Agriculture and Animal Science
              </option>
              <option className="dropdown-item">
                Agriculture and Animal Science
              </option>
              <option className="dropdown-item">
                Agriculture and Animal Science
              </option>
            </>
          ) : props.faculty === "law" ? (
            <>
              <option className="dropdown-item">Law</option>
              <option className="dropdown-item">Law</option>
              <option className="dropdown-item">Law</option>
              <option className="dropdown-item">Law</option>
            </>
          ) : (
            ""
          )}
        </select>
      </div>
    </div>
  );
}

export default Course;
