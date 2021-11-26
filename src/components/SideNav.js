import React from 'react'

function SideNav() {
    return (
        <div className="h-screen fixed bg-white w-auto shadow top-auto mt-2 right-0 ">
            <div className="side-navbar">
                <ul className="p-4 grid">
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">Home</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">GPA Calculator</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">Percentage Converter</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">Age Calculator</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">Currency Converter</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">CV Generator</a></li>
                    <li className=""><a  className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" href="#">Nepali Converter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
