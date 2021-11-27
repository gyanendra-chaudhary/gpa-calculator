import React from 'react'


function SideNav({getTemplate}) {
    const handleMainSection = (e) =>{
        getTemplate(e);
    }
    return (
        <div className="h-screen fixed bg-white w-auto shadow top-auto mt-2 right-0 ">
            <div className="side-navbar">
                <ul className="p-4 grid">
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('Home')}}>Home</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('GpaCalculator')}}>GPA Calculator</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('PercentageConverter')}}>Percentage Converter</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('AgeCalculator')}}>Age Calculator</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('CurrencyConverter')}}>Currency Converter</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('CvGenerator')}}>CV Generator</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('NepaliConverter')}}>Nepali Converter</li>
                    <li className="p-2 shadow block mb-3 bg-gray-300 rounded text-lg cursor-pointer" onClick={()=>{handleMainSection('MemeCreator')}}>MEME Creator</li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
