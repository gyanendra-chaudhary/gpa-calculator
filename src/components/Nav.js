import React,{useState} from 'react'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// side navbar
import SideNav from './SideNav'

function Nav() {
  const [sidebar,setSidebar]=useState(false);
  const handleSidebar = () =>{
    setSidebar(!sidebar);
    console.log("clicked....",sidebar);

  }
    return (
        <div className=" nav p-2 bg-gray-50 shadow-sm grid grid-cols-3 fixed left-0 right-0">
          <div className="site col-span-2 flex ml-4">
            <div className="flag bg-center bg-cover" style={{backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/139px-Flag_of_Nepal.svg.png")`, height:"30px", width:"30px"}}>
              {/* <img src= "flag.png" className="h-8 w-8" /> */}
            </div>
            <div className="app-name mx-1"><h2 className="text-2xl font-semibold">GPA CALCULATOR NEPAL</h2></div>
          </div>
          <div className="hamberger text-right mr-3"><FontAwesomeIcon className="cursor-pointer" icon={sidebar?faTimes:faBars} onClick={handleSidebar}/></div>

          {/* sidenavbar */}
          <div className="side-nav">
            {sidebar?<SideNav />:""}
          </div>
          {/* end sidenavbar */}
        </div>
    )
}

export default Nav
