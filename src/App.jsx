import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";



function App() {
  const [students, setStudents] = useState(studentsData)

  const [ fullNameValue, setFullNameValue ] = useState("")
  const [ profileImageValue, setProfileImageValue ] = useState("")
  const [ phoneValue, setPhoneValue ] = useState("")
  const [ emailValue, setEmailValue ] = useState("")
  const [ programValue, setProgramValue ] = useState("Web Dev") // uses web dev as default
  const [ graduationYearValue, setGraduationYearValue ] = useState(2024)
  const [ graduatedValue, setGraduatedValue ] = useState(false)


  const handleFullNameChange = (event) => {
    // console.log(event.target.value)
    // let value = event.target.value
    setFullNameValue(event.target.value);
  };

  const handleProfileImageChange = (event) => {
    setProfileImageValue(event.target.value);
  };

  const handlePhoneValueChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleProgramChange = (event) => {
    setProgramValue(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setGraduationYearValue(event.target.value);
  };

  const handleGraduatedChange = (event) => {
    setGraduatedValue(event.target.value);
  };


  // handleFormSubmit starts here
  const handleFormSubmit = (event) => {
    // avoid default settings and refreshing 
    event.preventDefault()

    // new student object to create on submit folowing json
    const newStudent = {
      fullName: fullNameValue,
      email: emailValue,
      phone: phoneValue,
      program: programValue,
      image: profileImageValue,
      graduationYear: graduationYearValue,
      graduated: graduatedValue,
    }
    
    // updates the student list adding the new on
    setStudents((prevStudents) => [...prevStudents, newStudent])

    // clear form inputs missing here * * * * * * *

  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleFullNameChange} name="fullName" type="text" placeholder="Ada Lovelace" value={fullNameValue} />
          </label>

          <label>
            Profile Image
            <input onChange={handleProfileImageChange} name="image" type="url" placeholder="Cats" value={profileImageValue} />
          </label>

          <label>
            Phone
            <input onChange={handlePhoneValueChange} name="phone" type="tel" placeholder="Better Write" value={phoneValue} />
          </label>

          <label>
            Email
            <input onChange={handleEmailValueChange} name="email" type="email" placeholder="Are You Serious" value={emailValue} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={handleProgramChange} name="program" value={programValue} >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={handleGraduationYearChange} 
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYearValue} />
          </label>

          <label>
            Graduated
            <input onChange={handleGraduatedChange} name="graduated" type="checkbox" checked={graduatedValue} />
            {/* value changed to checked !!!! checkbox type */}
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
