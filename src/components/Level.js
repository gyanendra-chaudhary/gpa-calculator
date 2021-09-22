import React, { useState } from "react";
import Course from "./Course";
import Faculty from "./Faculty";
import ResultTable from "./ResultTable";
import data from "../mydata";
import AllResult from "./AllResult";
function Level(props) {
  const [selValue, setSelValue] = useState("see");
  const [faculty, setFaculty] = useState("");

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
              <label htmlFor="level" className="" style={{"fontSize":"1.2rem"}}>
                Choose a Level:&nbsp;&nbsp;
              </label>
              <select
                className="btn border"
                style={{"fontSize":"1rem"}}
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
              <label htmlFor="faculty" style={{"fontSize":"1.2rem"}}>Choose a Faculty:&nbsp;&nbsp;</label>
              <select
                className="btn border" style={{"fontSize":"1.2rem"}}
                name="faculty"
                id="faculty"
                onChange={handleFaculty}
                value={faculty}
              >
                <option className="dropdown-item" value="science">
                  Science
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
                <option className="dropdown-item" value="others">
                  Others
                </option>
                ;
              </select>
            </div>
          ) : selValue === "bachelors" ? (
            <>
              <div className="dropdown">
                <label htmlFor="faculty" style={{"fontSize":"1.2rem"}}  >Choose a Faculty:&nbsp;&nbsp;</label>
                <select
                  className="btn border"
                  style={{"fontSize":"1.2rem"}}
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

      {selValue === "see" ? (
        <ResultTable data={data.see} />
      ) : selValue === "+2" ? (
        <AllResult faculty={faculty} />
      ) : (
        selValue === "bachelors" ?<AllResult faculty={faculty} />:""
      )}
    </div>
  );
}

export default Level;
