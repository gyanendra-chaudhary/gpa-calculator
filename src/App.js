import React,{useState} from 'react';
import './index.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
function App() {
  const [alert, setAlert]=useState({
    mode: false,
    value: "Error occured",
  });


  // selecting template
  const [template, setTemplate] = useState("Home");

    const getTemplate=(template)=>{
        setTemplate(template);
        console.log("from app",template);
    }

  return (

    
    <div className="App">
      <div className="mx-auto text-center">
        {/* navbar */}
          <Nav getTemplate={getTemplate}/>
        {/* end navbar */}
        {/* main */}
        <div className="alert p-0 bg-red-600" style={{display:`${alert.mode?"block":"none"}`}}>{alert.mode && alert.value}</div>
        <div className="conatainer mx-auto grid md:grid-cols-3 gap-2 sm:grid-cols-2">
          <div className={template=="GpaCalculator"?"section col-span-2 p-4 mt-5":"section col-span-3 p-4 mt-5"}>
            {/* section */}
              <Main template = {template}/>
            {/* end section */}
          </div>
          <div className="sidebar p-4 mt-4">
            {/* sidebar */} 

            {template=="GpaCalculator"?  <Sidebar />:""}
            {/* end sidebar */}
          </div>     
        </div>        
        {/* end main */}
      </div>
    </div>
  );
}

export default App;
