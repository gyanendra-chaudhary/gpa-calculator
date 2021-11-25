import React from 'react'

function Nav() {
    return (
        <div className=" nav flex justify-content-center p-2 bg-gray-50 shadow-sm">
          <div className="flag bg-center bg-cover" style={{backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/139px-Flag_of_Nepal.svg.png")`, height:"30px", width:"30px"}}>
            {/* <img src= "flag.png" className="h-8 w-8" /> */}
          </div>
          <div className="app-name mx-1"><h2 className="text-2xl font-semibold">GPA NEPAL</h2></div>
        </div>
    )
}

export default Nav
