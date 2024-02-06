/*import React from 'react';*/
/*import './App.css';*/
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import ProgramAndFaculty from './Pages/ProgramAndFaculty'
import Resources from './Pages/Resources'
import Timetable from './Pages/Timetable'


import AdminRegistration from './ProfileFunctionality/AdminRegistration'
import TeacherRegistration from './ProfileFunctionality/TeacherRegistration'
import AdminLogin from './ProfileFunctionality/AdminLogin'
import AdminViewLogin from './ProfileFunctionality/AdminViewLogin'
import AdminModifyLogin from './ProfileFunctionality/AdminModifyLogin'
import TeacherModifyLogin from './ProfileFunctionality/TeacherModifyLogin'
import TeacherViewLogin from './ProfileFunctionality/TeacherViewLogin'
import TeacherLogin from './ProfileFunctionality/TeacherLogin'

import AdminProfile from './ProfileFunctionality/AdminProfile'
import AdminViewProfile from './ProfileFunctionality/AdminViewProfile'
import AdminModifyProfile from './ProfileFunctionality/AdminModifyProfile'
import TeacherModifyProfile from './ProfileFunctionality/TeacherModifyProfile'
import TeacherViewProfile from './ProfileFunctionality/TeacherViewProfile'
import TeacherProfile from './ProfileFunctionality/TeacherProfile'

import AdminProgram from './ProgramFunctionality/AdminProgram'
import TeacherProgram from './ProgramFunctionality/TeacherProgram'
import AddProgram from './ProgramFunctionality/AddProgram'
import AddSemester from './ProgramFunctionality/AddSemester'
import DeleteProgram from './ProgramFunctionality/DeleteProgram'
import AddDivision from './ProgramFunctionality/AddDivision'
import DeleteDivision from './ProgramFunctionality/DeleteDivision'
import AddSubject from './ProgramFunctionality/AddSubject'
import DeleteSubject from './ProgramFunctionality/DeleteSubject'
import TeacherViewProgram from './ProgramFunctionality/TeacherViewProgram'
import TeacherViewSubject from './ProgramFunctionality/TeacherViewSubject'
import AddTimeSlotPerDay from './ProgramFunctionality/TimeSlotPerDay'
import DeleteTimeSlotPerDay from './ProgramFunctionality/DeleteTimeSlotPerDay'




import AddClassroom from './ResourcesFunctionality/AddClassroom'
import AddLab from './ResourcesFunctionality/AddLab'
import DeleteLab from './ResourcesFunctionality/DeleteLab'
import DeleteClassroom from './ResourcesFunctionality/DeleteClassroom'


import AdminTimetable from './TimetableFunctionality/AdminTimetable'
import TeacherTimetable from './TimetableFunctionality/TeacherTimetable'
import  TeacherAllocation from './TimetableFunctionality/TeacherAllocation'
import  ClassroomDivisionAllocation from './TimetableFunctionality/ClassroomDivisionAllocation'
import  LabDivisionAllocation from './TimetableFunctionality/LabDivisionAllocation'
import TeacherAvailability from './TimetableFunctionality/TeacherAvailability'
import AllTeachersWithSubjects from './TimetableFunctionality/AllTeachersWithSubjects'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/program" element={<ProgramAndFaculty/>}/>
      <Route path="/resources" element={<Resources/>}/>


      <Route path="/AdminProfile" element={<AdminProfile/>}/>
      <Route path="/AdminRegistration" element={<AdminRegistration/>}/>
      <Route path="/TeacherProfile" element={<TeacherProfile/>}/>
      <Route path="/TeacherRegistration" element={<TeacherRegistration/>}/>
      <Route path="/Adminprogram" element={<AdminProgram/>}/>
      <Route path="/Teacherprogram" element={<TeacherProgram/>}/>

      <Route path="/addProgram" element={<AddProgram/>}/>
      <Route path="/addClassroom" element={<AddClassroom/>}/>
      <Route path="/deleteClassroom" element={<DeleteClassroom />}/>

      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/profile/:loginid" element={<AdminViewProfile/>}/>
      <Route path="/TeacherLogin" element={<TeacherLogin/>}/>
      <Route path="/AdminProfile" element={<AdminProfile/>}/>





        {/* <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/program" element={<ProgramAndFaculty/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/timetable" element={<Timetable/>}/>

        <Route path="/AdminProfile" element={<AdminProfile/>}/>
        <Route path="/TeacherProfile" element={<TeacherProfile/>}/>
        <Route path="/profile/:loginid" element={<AdminViewProfile/>}/>
        <Route path="/admin/modify/:loginid" element={<AdminModifyProfile/>}/>
        <Route path="/teacher/profile/:loginid" element={<TeacherViewProfile/>}/>
        <Route path="/teacher/modify/:loginid" element={<TeacherModifyProfile/>}/>

        <Route path="/AdminRegistration" element={<AdminRegistration/>}/>
        <Route path="/TeacherRegistration" element={<TeacherRegistration/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminViewLogin" element={<AdminViewLogin/>}/>
        <Route path="/AdminModifyLogin" element={<AdminModifyLogin/>}/>
        <Route path="/TeacherLogin" element={<TeacherLogin/>}/>
        <Route path="/TeacherViewLogin" element={<TeacherViewLogin/>}/>
        <Route path="/TeacherModifyLogin" element={<TeacherModifyLogin/>}/>

        <Route path="/Adminprogram" element={<AdminProgram/>}/>
        <Route path="/Teacherprogram" element={<TeacherProgram/>}/>
        <Route path="/addProgram" element={<AddProgram/>}/>
        <Route path="/deleteProgram" element={<DeleteProgram/>}/>
        <Route path="/addSemester" element={<AddSemester/>}/>
        <Route path="/deleteProgram" element={<DeleteProgram/>}/>
        <Route path="/addDivision" element={<AddDivision/>}/>
        <Route path="/deleteDivision" element={<DeleteDivision/>}/>
        <Route path="/addSubject" element={<AddSubject/>}/>
        <Route path="/deleteSubject" element={<DeleteSubject/>}/>
        <Route path="/programs" element={<TeacherViewProgram/>}/>
        <Route path="/subjects" element={<TeacherViewSubject/>}/>
        <Route path="/addTimeSlotPerDay" element={<AddTimeSlotPerDay/>}/>
        <Route path="/deleteTimeSlot" element={<DeleteTimeSlotPerDay/>}/>
     


        <Route path="/addClassroom" element={<AddClassroom/>}/>
        <Route path="/addLab" element={<AddLab/>}/>
        <Route path="/deleteLab" element={<DeleteLab/>}/>
        <Route path="/deleteClassroom" element={<DeleteClassroom />}/>

        <Route path="/AdminTimetable" element={<AdminTimetable/>}/>
        <Route path="/TeacherTimetable" element={<TeacherTimetable/>}/>
        <Route path="/allocateTeacher" element={<TeacherAllocation/>}/>
        <Route path="/allocateClassroomToDivision" element={<ClassroomDivisionAllocation/>}/>
        <Route path="/allocateLabToDivision" element={<LabDivisionAllocation/>}/>
        <Route path="/teacherAvailability" element={<TeacherAvailability/>}/>
        <Route path="/teacherAllocations" element={<AllTeachersWithSubjects/>}/>
        
         */}
      
    
   
        
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
