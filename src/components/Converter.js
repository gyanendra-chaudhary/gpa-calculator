import React,{useState} from "react";
import './Converter.css'

function Converter() {
  const [gpa,setGpa]=useState(0);
  const [percentage,setPercentage]=useState(0);
  const [alert,setAlert]=useState("");
  const [result,setResult]=useState("");

function handleGpa(e){
  var val = e.target.value;
  if(e.target.value > 4 ||
    e.target.value < 0 ||
    e.target.value === " "){
    setAlert("Please Check Your Value.");
  }else{
    setAlert("");
    setGpa(e.target.value);
  }
  converter("gpa",val);
}

function handlePercentage(e){
  if(e.target.value > 4 ||
    e.target.value < 0 ||
    e.target.value === " "){
    setAlert("Please Check Your Value.");
  }else{
    setAlert("");
    setPercentage(e.target.value);
  }
}
function converter(type,value){
 
}
  return (
    <div className="converter">
      <h1>Convet Here...</h1>
      <div className="gpa_to_percentage">
        <div className="gpa">
          <label htmlFor="input">Input your GPA</label>
          <input type="number" min={0} max={4} step={0.1} placeholder={gpa} onChange={handleGpa} />
        </div>
        <div className="result text-center">
          <span className="">Result</span>
          <br/>
          <span className="text-danger">{alert}</span>
        </div>
        <div className="percentage">
          <label htmlFor="input">Input your Percentage</label>
          <input type="number" min={0} max={4} step={0.1} placeholder={percentage} />
        </div>
      </div>
    </div>
  );
}

export default Converter;
