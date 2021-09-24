import React,{useState} from "react";
import './Converter.css'

function Converter() {
  const [gpa,setGpa]=useState(0);
  const [percentage,setPercentage]=useState(0);
  const [alert,setAlert]=useState("");

function handleGpa(e){
  var val = e.target.value;
  if(val > 4 ||
    val < 0 ||
    val === " "){
    setAlert("Please Check Your Value.");
  }else{
    setAlert("");
    converter("gpa",val);
  }

}

function handlePercentage(e){
  var val = e.target.value;
  if(val > 100 ||
    val < 0 ||
    val === " "){
    setAlert("Please Check Your Value.");
  }else{
    setAlert("");
    converter("percentage",val);

  }
}
function converter(type,value){
let x = "";
if(type==="gpa"){
  x = parseFloat(value)*25;
  x = Number.parseFloat(x).toFixed(2);
  if(x){
    setAlert(x+" %");
  }
}else if(type==="percentage"){
  x = parseFloat(value)/25;
  x = Number.parseFloat(x).toFixed(2);

  if(x){
    setAlert(x+" gpa");
  }
}
//  return x;
}
  return (
    <div className="converter">
      <h1>Convet Here...</h1>
      <div className="gpa_to_percentage">
        <div className="gpa">
          <label htmlFor="input">Input your GPA</label>
          <input type="number" min={0} max={4} step={0.1} placeholder="GPA  " onChange={handleGpa} />
        </div>
        <div className="result text-center">
          <span className="">Result</span>
          <br/>
          <span className="text-danger">{alert}</span>
        </div>
        <div className="percentage">
          <label htmlFor="input">Input your Percentage</label>
          <input type="number" min={0} max={100} step={1} placeholder="%" onChange={handlePercentage} />
        </div>
      </div>
    </div>
  );
}

export default Converter;
