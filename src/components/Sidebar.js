import React from 'react'

function Sidebar() {
    return (
        <div className="p-4 sm:p-0">
            <div className="result">
            <h3 className="text-xl font-bold text-justify">Result - <quote>"Congratulations"</quote></h3>
            <div>
            <ul className="mt-2 text-justify list-disc">
                <li>GPA = 4.0</li>
                <li>Percentage = 100%</li>
                <li>Division = 1st With Distinction</li>
                <li>Grade = A+</li>
                <li>Scale = 80.0 - 100.0</li>
                <li>Discription = Outstanding</li>
            </ul>
            </div>
            </div>
            <div className="suggestions">
            <h3 className="text-xl font-bold text-justify mt-4 sm:mt-2">Suggestions</h3>
            <div>
            <ul className="mt-2 text-justify list-disc text-blue-600">
                <li>Congratulations!!</li>
                <li>You have a very good achievement now you have to focus on your weak part and to improve it.</li>
                <li>Choose a better college or university for your further study</li>
                <li>You should focus on productive learning.</li>
                <li>Good to go for your future plans.</li>
                <li>Finnaly <quote>"Best Of Luck For!! Good Day!!"</quote></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
