import React from "react";

function Result(props) {
  var total = 0;
  var number = 0;
  const totalCompGpa = props.comp.map((val) => {
    total += parseFloat(val.value);
    number += 1;
  });
  const totalOptGpa = props.opt.map((val) => {
    total += parseFloat(val.grd);
    number += 1;
  });
  const totalGpa = total / number;
  return (
    <div className="text-center text-white bg-success h5 p-2">
      You Score :&nbsp;
      {isNaN(totalGpa)
        ? "Insert Compulsary Subject First"
        : Number.parseFloat(totalGpa).toFixed(3)}{" "}
      &nbsp;GPA
    </div>
  );
}

export default Result;
