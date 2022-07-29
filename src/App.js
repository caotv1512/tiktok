// import logo from "./logo.svg";
import { useState } from "react";
import Content from "./Content";

// const courses = [
//   {
//     id: 1,
//     name: "HTML, CSS",
//   },
//   {
//     id: 2,
//     name: "Javascript",
//   },
//   {
//     id: 3,
//     name: "RactJS",
//   },
// ];

function App() {
  // const [infor, setInfor] = useState({
  //   name: "Tran Van Cao",
  //   age: 20,
  //   address: "Ninh Binh",
  // });

  // const handleUpdate = () => {
  //   setInfor({
  //     success: "Update successfull"
  //   });
  // };

  // return (
  //   <div className="App">
  //       <h1>{JSON.stringify(infor)}</h1>
  //       <button onClick={handleUpdate}>Update</button>
  //   </div>
  // );

  // =============================29===========================
  //   const gifts = ["CPU i9", "RAM 64G RGB", "RGB Keyboard", "LapTop"];

  //   const [gift, setGift] = useState();

  //   const handleGetGift = () => {
  //     const index = Math.floor(Math.random() * gifts.length)
  //     setGift(gifts[index]);
  //     console.log(index);
  //   };
  //   return (
  //     <div>
  //       <h1>{gift || "Chưa có phần thưởng"}</h1>
  //       <button onClick={handleGetGift}>Lấy thưởng</button>
  //     </div>
  //   );

  // =============================30=====================================

  // const [checked, setChecked] = useState([]);
  // const handleCheck = (id) => {
  //   setChecked((prev) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter(item => item !== id)
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
  // };
  // const handleSubmit = () => {
  //   console.log({ id: checked });
  // };
  // return (
  //   <div>
  //     {courses.map((course) => (
  //       <div key={course.id}>
  //         <input
  //           type="checkbox"
  //           checked={checked.includes(course.id)}
  //           onChange={() => handleCheck(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}

  //     <button onClick={() => handleSubmit()}>Register</button>
  //   </div>
  // );

  // ============================31========================

  // const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(() =>{
  //   const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  //   return storageJobs ?? []
  // });

  // const handleSubmit = () => {
  //   setJobs((prev) => {
  //     const newJob = [...prev, job];
  //     const jsonJob = JSON.stringify(newJob);
  //     localStorage.setItem("jobs", jsonJob);
  //     return newJob;
  //   });
  //   setJob('')
  // };

  // return (
  //   <div style={{ padding: 32 }}>
  //     <input value={job} onChange={(e) => setJob(e.target.value)} />
  //     <button onClick={handleSubmit}>Add</button>

  //     <ul>
  //       {jobs.map((job, index) => (
  //         <li key={index}> {job}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // ===========================Mounted/Unmountes=======================
//   const [show, setShow] = useState(false);
//   return (
//     <div style={{ padding: 30 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );

// ====================useEffect================================

  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 30 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
