import React from 'react'

function GpaCalculator() {
    const formHandle = (e) =>{
        e.preventDefault();

    }
    return (
        <div className="gpa-form-container">
            <div className="gpa-form container border p-4">
                <form onSubmit={formHandle} className="form ">
                    <div className="form-control flex justify-between ">
                        <span className="text-auto">Please Choose Your Level</span>
                        <span className="form-item text-sm">
                            <input type="radio" name="level" id="see" value="see"/>
                            &nbsp;
                            <label htmlFor="see">SEE</label>
                            &nbsp;&nbsp;
                            <input type="radio" name="level" id="+2" value="+2" />
                            &nbsp;
                            <label htmlFor="+2">+2</label>
                            &nbsp;&nbsp;
                            <input type="radio" name="level" id="bachelor" value="bachelor"/>
                            &nbsp;
                            <label htmlFor="bachelor">BACHELOR</label>
                            &nbsp;&nbsp;
                            <input type="radio" name="level" id="bachelor" value="masters"/>
                            &nbsp;
                            <label htmlFor="masters">MASTERS</label>
                            &nbsp;&nbsp;
                            <input type="radio" name="level" id="other" value="other" />
                            &nbsp;
                            <label htmlFor="others">OTHERS</label>

                        </span>                        
                    </div>
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="col-span-3 text-left text-auto">Subjects</div>
                        <div className="text-right text-auto">Marks</div>
                    </div>
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="subject m-0 p-0 col-span-3">
                            <input type="text" name="sub1" id="" className="w-full p-1.5" placeholder="Please Enter Your Subject" />
                            
                        </div>
                        <div className="mark m-0 p-0">
                            <input type="number" name="mark" id="mark" min={0} max={4} step={0.1}  className="w-full p-1.5 text-center" placeholder="4.0" />
                        </div>
                    </div>

                    {/* test */}
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="subject m-0 p-0 col-span-3">
                            <input type="text" name="sub1" id="" className="w-full p-1.5" placeholder="Please Enter Your Subject" />
                            
                        </div>
                        <div className="mark m-0 p-0">
                            <input type="number" name="mark" id="mark" min={0} max={4} step={0.1}  className="w-full p-1.5 text-center" placeholder="4.0" />
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="subject m-0 p-0 col-span-3">
                            <input type="text" name="sub1" id="" className="w-full p-1.5" placeholder="Please Enter Your Subject" />
                            
                        </div>
                        <div className="mark m-0 p-0">
                            <input type="number" name="mark" id="mark" min={0} max={4} step={0.1}  className="w-full p-1.5 text-center" placeholder="4.0" />
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="subject m-0 p-0 col-span-3">
                            <input type="text" name="sub1" id="" className="w-full p-1.5" placeholder="Please Enter Your Subject" />
                            
                        </div>
                        <div className="mark m-0 p-0">
                            <input type="number" name="mark" id="mark" min={0} max={4} step={0.1}  className="w-full p-1.5 text-center" placeholder="4.0" />
                        </div>
                    </div>
                    <div className="form-control grid grid-cols-4 mt-1">
                        <div className="subject m-0 p-0 col-span-3">
                            <input type="text" name="sub1" id="" className="w-full p-1.5" placeholder="Please Enter Your Subject" />
                            
                        </div>
                        <div className="mark m-0 p-0">
                            <input type="number" name="mark" id="mark" min={0} max={4} step={0.1}  className="w-full p-1.5 text-center" placeholder="4.0" />
                        </div>
                    </div>
                    {/* end test */}


                    <div className="mt-3">
                        <input type="submit" value="Click To Check" className="w-50 p-1.5 font-bold bg-blue-800 rounded-md text-white" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default GpaCalculator
