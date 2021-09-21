import React, { useState } from "react";
import Course from "./Course";
import Faculty from "./Faculty";
import ResultTable from "./ResultTable";
import data from "../mydata";
function Level(props) {
  const [selValue, setSelValue] = useState("see");
  const [faculty, setFaculty] = useState("engineering");
  function handleChange(e) {
    setSelValue(e.target.value);
  }
  function handleFaculty(e) {
    setFaculty(e.target.value);
  }
  return (
    <div>
      <div className="border">
        <div className="filter__levels d-flex p-2 justify-content-between">
          <div className="level">
            <div className="dropdown">
              <label htmlFor="level" className="">
                Choose a Level:&nbsp;&nbsp;
              </label>
              <select
                className="btn border"
                name="level"
                id="level"
                onChange={handleChange}
                value={selValue}
              >
                <option className="dropdown-item" value="see">
                  SEE
                </option>
                <option className="dropdown-item" value="+2">
                  +2
                </option>
                <option className="dropdown-item" value="bachelors">
                  BACHELOR
                </option>
                {/* <option className="dropdown-item" value="masters">
                  MASTER
                </option> */}
              </select>
            </div>
          </div>
          {selValue === "see" ? (
            ""
          ) : selValue === "+2" ? (
            <div className="dropdown">
              <label htmlFor="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
              <select className="btn border" name="faculty" id="faculty">
                <option className="dropdown-item">Science</option>;
                <option className="dropdown-item">Management</option>;
                <option className="dropdown-item">Science</option>;
                <option className="dropdown-item">Education</option>;
                <option className="dropdown-item">Others</option>;
              </select>
            </div>
          ) : selValue === "bachelors" ? (
            <>
              <div className="dropdown">
                <label htmlFor="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
                <select
                  className="btn border"
                  name="faculty"
                  id="faculty"
                  onChange={handleFaculty}
                  value={faculty}
                >
                  <option className="dropdown-item" value="engineering">
                    Engineering
                  </option>
                  ;
                  <option className="dropdown-item" value="scienceTech">
                    Science and Technology
                  </option>
                  ;
                  <option className="dropdown-item" value="management">
                    Management
                  </option>
                  ;
                  <option className="dropdown-item" value="education">
                    Education
                  </option>
                  ;
                  <option className="dropdown-item" value="medicine">
                    Medicine
                  </option>
                  ;
                  <option className="dropdown-item" value="humSs">
                    Humanities and Social Science
                  </option>
                  <option className="dropdown-item" value="agAs">
                    Ag and Animal Science
                  </option>
                  ;
                  <option className="dropdown-item" value="law">
                    Law
                  </option>
                  ;
                </select>
              </div>
              <Course faculty={faculty} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* {selValue === "see" ? <ResultTable data={data.see} /> : selValue==="+2"?<ResultTable data={data.neb} />:""} */}
      {selValue === "see" ? <ResultTable data={data.see} /> : ""}
    </div>
  );
}

export default Level;
