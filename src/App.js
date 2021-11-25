import React,{useState} from 'react';
import './index.css';
import Nav from './components/Nav';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
function App() {
  const [alert, setAlert]=useState({
    mode: false,
    value: "Error occured",
  });
  return (
    <div className="App">
      <div className="mx-auto text-center">
        {/* navbar */}
          <Nav />
        {/* end navbar */}
        {/* main */}
        <div className="alert p-0 bg-red-600" style={{display:`${alert.mode?"block":"none"}`}}>{alert.mode && alert.value}</div>
        <div className="conatainer mx-auto grid grid-cols-3 gap-2 auto-cols-auto md:auto-cols-auto">
          <div className="section col-span-2 p-4">
            {/* section */}
              <Section />
            {/* end section */}
          </div>
          <div className="sidebar p-4">
            {/* sidebar */} 
              <Sidebar />
            {/* end sidebar */}
          </div>     
        </div>        
        {/* end main */}
      </div>
    </div>
  );
}

export default App;
