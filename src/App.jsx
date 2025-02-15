import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/BasicComponents/Dashboard/Dashboard'
import SignUp from './Components/BasicComponents/SignUp/SignUp'
import Login from './Components/BasicComponents/Login/Login'
import ProtectedRoute from './Components/BasicComponents/ProtectedRoute/ProtectedRoute'
import AuthRoute from './Components/BasicComponents/ProtectedRoute/AuthRoute'
import StudentAdd from './Components/Screens/Student/StudentAdd'
import StudentList from './Components/Screens/Student/StudentList'

const App = () => {
  return (
    <>
    <Routes>

<Route element={<AuthRoute />}>
    <Route path='/' element={<SignUp />}/>
    <Route path='Login' element={<Login />}/>
</Route>

    <Route element={<ProtectedRoute />}>
    <Route path='Dashboard' element={<Dashboard />} />
    </Route>
    
    <Route path='Dashboard' element={<Dashboard />}>
    <Route index element={<StudentList />}/>
    <Route path='Studentadd' element={<StudentAdd />}/>
    <Route path='Studentlist' element={<StudentList />}/>   
    </Route>

    </Routes>
    </>
  )
}

export default App