// const addOptionalElement = () => {
//   let tbody = document.querySelector("#tbody");
//   let tr = document.createElement("tr");
//   let td = document.createElement("td");
//   let input = document.createElement("input");
//   input.type = "text";
//   let td1 = (td.innerHTML = input);
//   let td2 = (td.innerHTML = input);
//   let td3 = (td.innerHTML = input);
//   console.log((tr.innerHTML = td1 + td2));
// };

//   let tbody = document.querySelector("#tbody");
// let tr = document.createElement("tr");
// tr.innerHTML = `<td>
// <input type="text" onChange={handleOptChange}/>
// </td>
// <td>
// 4Hr
// </td>
// <td id={""}>

// </td>
// <td>
// <input type="number"
// min={0}
// max={4}
// />
// </td>
// `;
// tbody.appendChild(tr);
// console.log(tr);

<div className="delete__notice p-2 rounded shadow bg-white text-danger border">
  <p className="text-center">Are you sure want to delete..?</p>
  <hr />
  <div>
    <button
      className="btn btn-primary"
      onClick={() => {
        setDel(true);
      }}
    >
      Okay
    </button>
    <button
      className="btn btn-danger"
      onClick={() => {
        setDel(false);
      }}
    >
      Cancel
    </button>
  </div>
</div>;

// <div className="delete__notice p-2 rounded shadow bg-white text-danger border">
//           <p className="text-center">Are you sure want to delete..?</p>
//           <hr />
//           <div>
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 setDel(true);
//               }}
//             >
//               Okay
//             </button>
//             <button
//               className="btn btn-danger"
//               onClick={() => {
//                 setDel(false);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>

// bachelor course

{
  /* <div className="dropdown">
                <label htmlFor="faculty">Choose a Faculty:&nbsp;&nbsp;</label>
                <select className="btn border" name="faculty" id="faculty">
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("engineering")}
                  >
                    Engineering
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("science&tech")}
                  >
                    Science and Technology
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("management")}
                  >
                    Management
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("education")}
                  >
                    Education
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("medicine")}
                  >
                    Medicine
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("education")}
                  >
                    Education
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("hum&ss")}
                  >
                    Humanities and Social Science
                  </option>
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("ag&as")}
                  >
                    Ag and Animal Science
                  </option>
                  ;
                  <option
                    className="dropdown-item"
                    onSelect={setFaculty("law")}
                  >
                    Law
                  </option>
                  ; ;
                </select>
              </div>
              <Course faculty={faculty} /> */
}
