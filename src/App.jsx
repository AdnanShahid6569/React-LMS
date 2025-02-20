import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/BasicComponents/Dashboard/Dashboard'
import SignUp from './Components/BasicComponents/SignUp/SignUp'
import Login from './Components/BasicComponents/Login/Login'
import ProtectedRoute from './Components/BasicComponents/ProtectedRoute/ProtectedRoute'
import AuthRoute from './Components/BasicComponents/ProtectedRoute/AuthRoute'
import StudentAdd from './Components/Screens/Student/StudentAdd'
import StudentList from './Components/Screens/Student/StudentList'
import TeacherAdd from './Components/Screens/Teacher/TeacherAdd'
import TeacherList from './Components/Screens/Teacher/TeacherList'
import SubjectAdd from './Components/Screens/Subject/SubjectAdd'
import SubjectList from './Components/Screens/Subject/SubjectList'
import SyllabusAdd from './Components/Screens/Syllabus/SyllabusAdd'
import SyllabusList from './Components/Screens/Syllabus/SyllabusList'
import StudentRegis from './Components/Screens/School/StudentRegis'
import TeacherRegis from './Components/Screens/School/TeacherRegis'
import ClassList from './Components/Screens/Class/ClassList'
import ClassForm from './Components/Screens/Class/ClassForm'
import FeesSubmission from './Components/Screens/Fees/FeesSubmission'
import FeesStructure from './Components/Screens/Fees/FeesStructure'
import FeesVoucher from './Components/Screens/Fees/FeesVoucher'
import Admission from './Components/Screens/Admission/Admission'
import Examshedule from './Components/Screens/Exam/Examshedule'
import ExamResult from './Components/Screens/Exam/ExamResult'

const App = () => {
  return (
    <>
      <Routes>

        <Route element={<AuthRoute />}>
          <Route path='/' element={<SignUp />} />
          <Route path='Login' element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='Dashboard' element={<Dashboard />} />
        </Route>

        <Route path='Dashboard' element={<Dashboard />}>

          {/*Student Nested  */}
          <Route index element={<StudentList />} />
          <Route path='Studentadd' element={<StudentAdd />} />
          <Route path='Studentlist' element={<StudentList />} />

          {/*Teacher Nested  */}
          <Route path='Teacheradd' element={<TeacherAdd />} />
          <Route path='TeacherList' element={<TeacherList />} />

          {/*Subject Nested  */}
          <Route path='Subjectadd' element={<SubjectAdd />} />
          <Route path='Subjectlist' element={<SubjectList />} />

          {/*Syllabus Nested  */}
          <Route path='Syllabusadd' element={<SyllabusAdd />} />
          <Route path='Syllabuslist' element={<SyllabusList />} />

          {/*School Nested  */}
          <Route path='StudentRegis' element={<StudentRegis />} />
          <Route path='TeacherRegis' element={<TeacherRegis />} />

          {/*Class Nested  */}
          <Route path='Classform' element={<ClassForm />} />
          <Route path='Classlist' element={<ClassList />} />

               {/*Fees Nested  */}
               <Route path='FeeSubmission' element={<FeesSubmission />} />
          <Route path='FeeStructure' element={<FeesStructure />} />
          <Route path='FeeVoucher' element={<FeesVoucher />} />

          {/*Admission Nested  */}
          <Route path='Admissionform' element={<Admission />} />

           {/*Exam Nested  */}
           <Route path='Examshedule' element={<Examshedule />} />
           <Route path='Examresult' element={<ExamResult />} />
        </Route>

      </Routes>
    </>
  )
}

export default App