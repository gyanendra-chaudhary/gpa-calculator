import React, { useState } from "react";
import Result from "./Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBook,
  faClock,
  faGraduationCap,
  faFill,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// storing grade value
const fGrade = [];

//empty array for optional subjects
const optSub = [];

function ResultTable(props) {
  const [alert, setAlert] = useState("");
  const [oArr, setOarr] = useState([]);
  const [subject, setSubject] = useState("");
  const [creditHr, setCreditHr] = useState(null);
  const [grd, setGrd] = useState(0);
  const [fGradeLength, setFgradeLength] = useState(0);
  const [resultCheck, setResultCheck] = useState(true);
  // update final grade
  const [finalGrade, setFinalGrade] = useState("");
  const [toRemove, setToRemove] = useState([]);

  // handling grade value and push it to fGrade array.
  const handleGrade = (e) => {
    let key = e.target.id.split(" ").join("");
    let value = e.target.value;
    let obj = {};

    if (
      e.target.value > 4 ||
      e.target.value < 0 ||
      e.target.value === "" ||
      e.target.value === " "
    ) {
      setAlert("please input accurate value");
    } else {
      setAlert("");
      if (fGrade.length > 0) {
        // a.key === key
        let index = fGrade.findIndex((a) => a.key === key);
        if (index >= 0) {
          fGrade[index].value = value;
        } else {
          obj["key"] = key;
          obj["value"] = value;
          fGrade.push(obj);
        }
      } else {
        obj["key"] = key;
        obj["value"] = value;
        fGrade.push(obj);
      }
    }
    setGradeLetter(key);
    setFgradeLength(fGrade.length);
  };
  // checking and setting grade letter's according to used value
  const setGradeLetter = (id) => {
    id = id.split(" ").join("");

    var x = "";
    fGrade.map((num) => {
      if (num.key === id && num.value >= 0 && num.value <= 0.8) {
        x = "E";
      } else if (num.key === id && num.value >= 0.8 && num.value <= 1.2) {
        x = "D";
        console.log("lalalal");
      } else if (num.key === id && num.value >= 1.2 && num.value <= 1.6) {
        x = "D+";
      } else if (num.key === id && num.value >= 1.6 && num.value <= 2.0) {
        x = "C";
      } else if (num.key === id && num.value >= 2.0 && num.value <= 2.4) {
        x = "C+";
      } else if (num.key === id && num.value >= 2.4 && num.value <= 2.8) {
        x = "B";
      } else if (num.key === id && num.value >= 2.8 && num.value <= 3.2) {
        x = "B+";
      } else if (num.key === id && num.value >= 3.2 && num.value <= 3.6) {
        x = "A";
      } else if (num.key === id && num.value >= 3.6 && num.value <= 4.0) {
        x = "A+";
      }
    });

    document.querySelector(`#${id}grade`).innerText = x;
  };

  // for compulsary subjects
  const compulsaryTr = props.data.subDetails.map((val) => (
    <tr>
      <td>{val.sub}</td>
      <td>{val.creditHr}</td>
      <td id={val.sub.split(" ").join("") + "grade"}></td>
      <td>
        <input
          type="number"
          min={0}
          max={4}
          onChange={handleGrade}
          id={val.sub}
        />
      </td>
    </tr>
  ));

  // add optional subjects
  const addOptionalElement = (e) => {
    e.preventDefault();
    let obj = {};
    obj["sub"] = subject;
    obj["creditHr"] = creditHr;
    obj["grd"] = grd;
    setOarr(obj);
    optSub.push(obj);
    setResultCheck(true);
  };

  // for optional subjects
  const optionalSubs = optSub.map((val) => (
    <tr id={val.sub}>
      <td>{val.sub}</td>
      <td>{val.creditHr}Hr</td>
      <td>
        {val.grd >= 0 && val.grd <= 0.8
          ? "E"
          : val.grd >= 0.8 && val.grd <= 1.2
          ? "D"
          : val.grd >= 1.2 && val.grd <= 1.6
          ? "D+"
          : val.grd >= 1.6 && val.grd <= 2.0
          ? "C"
          : val.grd >= 2.0 && val.grd <= 2.4
          ? "C+"
          : val.grd >= 2.4 && val.grd <= 2.8
          ? "B"
          : val.grd >= 2.8 && val.grd <= 3.2
          ? "B+"
          : val.grd >= 3.2 && val.grd <= 3.6
          ? "A"
          : val.grd >= 3.6 && val.grd <= 4.0
          ? "A+"
          : ""}
      </td>
      <td>
        {val.grd}
        <span
          className="text-danger float-end px-3"
          style={{ cursor: "pointer" }}
          value={val.sub}
          onClick={removeOptSub}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </td>
    </tr>
  ));

  const handleInputChange = (e) => {
    if (e.target.name === "subject") {
      setSubject(e.target.value);
    } else if (e.target.name === "creditHr") {
      setCreditHr(e.target.value);
    } else if (e.target.name === "grd") {
      if (
        e.target.value > 4 ||
        e.target.value < 0 ||
        e.target.value === "" ||
        e.target.value === " "
      ) {
        setAlert("please input accurate value");
      } else {
        setAlert("");
      }
      setGrd(e.target.value);
    }
  };

  // remove optional subjects
  function removeOptSub(val) {
    // gettin values
    let id = val.nativeEvent.path[4].id;

    // find idex of element in opt array
    let index = optSub.findIndex((ind) => ind.sub === id);
    console.log(index);
    // delete element at particular index
    optSub.splice(index, 1);

    console.log(optSub);
  }
  return (
    <div className="result__table">
      <table className="table table-striped text-center pt-0" id="gpa__table">
        <thead>
          <tr className="text-success">
            <th scope="col">
              <FontAwesomeIcon icon={faBook} />
              &nbsp; Subject
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faClock} />
              &nbsp; Credit Hours
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faGraduationCap} />
              &nbsp; Final Grade
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faFill} />
              &nbsp; Grade Point
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr
            className="bg-warning text-white p-0 m-0"
            style={{ textAlign: "left" }}
          >
            <td className="p-0 pb-1 px-2 m-0" colSpan={1}>
              Compulsary
            </td>
            <td
              className="p-0 py-1 px-2 m-0 text-danger text-center h6"
              colSpan={3}
            >
              {alert}
            </td>
          </tr>
          {compulsaryTr}
          {fGradeLength >= 5 ? (
            <tr className="bg-primary text-white">
              <td className="p-1 m-0 px-2" style={{ textAlign: "left" }}>
                Optional
              </td>
              <td colSpan={3}>
                <form
                  onSubmit={addOptionalElement}
                  className="d-flex justify-content-between"
                >
                  <div>
                    <label>Subject</label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="subject"
                      required
                    />
                  </div>
                  <div>
                    <label>Credit Hour</label>
                    <input
                      type="number"
                      onChange={handleInputChange}
                      name="creditHr"
                      min={0}
                      max={50}
                      required
                    />
                  </div>
                  <div>
                    <label>Grade Point</label>
                    <input
                      type="number"
                      onChange={handleInputChange}
                      name="grd"
                      min={0}
                      max={4}
                      required
                    />
                  </div>
                  <button
                    className="rounded bg-primary text-white border-1"
                    style={{ height: "30px", width: "30px" }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </td>
            </tr>
          ) : (
            ""
          )}

          {optionalSubs}
        </tbody>
      </table>
      <div className="result__gpa text-center bg-light">
        {resultCheck ? <Result comp={fGrade} opt={optSub} /> : ""}
      </div>
    </div>
  );
}

export default ResultTable;
