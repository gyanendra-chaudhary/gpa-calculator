import React, { useState } from "react";
import Course from "./Course";
import Faculty from "./Faculty";
import ResultTable from "./ResultTable";
import data from "../mydata";

function Level(props) {
  const [selValue, setSelValue] = useState("see");
  function handleChange(e) {
    setSelValue(e.target.value);
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
                <option className="dropdown-item" value="masters">
                  MASTER
                </option>
              </select>
            </div>
          </div>
          {selValue === "see" ? (
            ""
          ) : selValue === "+2" ? (
            <Faculty data={data.neb.faculty} />
          ) : selValue === "bachelors" ? (
            <>
              <Faculty data={data.bachelor.faculty} />
              <Course />
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
