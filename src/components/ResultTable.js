import React, { useState } from "react";
// storing grade value
const fGrade = [];
//empty array for optional subjects
const optSub = [];

function Table(props) {
  const [alert, setAlert] = useState("");
  // handling grade value and push it to fGrade array.
  const handleGrade = (e) => {
    if (
      e.target.value > 4 ||
      e.target.value < 0 ||
      e.target.value === "" ||
      e.target.value === " "
    ) {
      setAlert("please input accurate value");
    } else {
      setAlert("");
      let key = e.target.id.split(" ").join("");
      let value = e.target.value;
      let obj = {};
      if (fGrade.length > 0) {
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
    setGradeLetter(e.target.id);
  };
  // checking and setting grade letter's according to used value
  const setGradeLetter = (id) => {
    id = id.split(" ").join("");
    let x = "";
    fGrade.map((num) => {
      if (num.key === id && num.value >= 0 && num.value <= 0.8) {
        x = "E";
      } else if (num.key === id && num.value >= 0.8 && num.value <= 1.2) {
        x = "D";
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
      } else {
        x = "";
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
  // for optional subjects
  // const optionalTr = optSub.map((val) => (
  //   <tr>
  //     <td>{val.sub}</td>
  //     <td>{val.creditHr}</td>
  //     <td id={val.sub.split(" ").join("") + "grade"}></td>
  //     <td>
  //       <input
  //         type="number"
  //         min={0}
  //         max={4}
  //         onChange={handleGrade}
  //         id={val.sub}
  //       />
  //     </td>
  //   </tr>
  // ));
  // add optional subjects
  const addOptionalElement = () => {
   let obj = {};
   obj["level"]="see";
   obj["compSubjects"]=[]

  };
  return (
    <div>
      <h6 className="text-white w-100 text-center bg-danger message">
        {alert}
      </h6>
      <table className="table table-striped text-center pt-0" id="gpa__table">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Credit Hours</th>
            <th scope="col">Final Grade</th>
            <th scope="col">Grade Point</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="bg-primary text-white p-0 m-0"
            style={{ textAlign: "left" }}
          >
            <td className="p-0 pb-1 px-2 m-0" colspan={4}>
              Compulsary
            </td>
          </tr>
          {compulsaryTr}
          <tr className="bg-success text-white">
            <td
              className="p-1 m-0 px-2"
              style={{ textAlign: "left" }}
              colspan={3}
            >
              Optional
            </td>
            <td className="px-2" style={{ textAlign: "right" }}>
              <button
                className="rounded bg-success text-white"
                onClick={addOptionalElement}
              >
                ADD
              </button>
            </td>
          </tr>
          {optionalTr}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
