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
              <label for="level" className="">
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
                <option className="dropdown-item">+2</option>
                <option className="dropdown-item">BACHELOR</option>
                <option className="dropdown-item">MASTER</option>
              </select>
            </div>
          </div>
          {selValue === "see" ? (
            ""
          ) : (
            <>
              <Faculty /> <Course />
            </>
          )}
        </div>
      </div>

      {selValue === "see" ? <ResultTable data={data.see} /> : ""}
    </div>
  );
}

export default Level;
