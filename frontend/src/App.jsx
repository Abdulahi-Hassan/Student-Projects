import { Route, Routes, redirect, useNavigate } from 'react-router-dom'
import { Change, Login, Register } from './Login'
import { jwtDecode } from 'jwt-decode'
import { Header } from './Header'
import { Home } from './Menu/Home'
import { About } from './Menu/About'
import { Contuct } from './Menu/Contuct'
import { Services } from './Menu/Services'
import { UserDashboard } from './Dashboard/UserDashboard'
import { AdminDashboard } from './Dashboard/AdminDashboard'
//receipt
import { ReceiptView } from './Component/Receipts/ReceiptView'
import { ReceiptCreate } from './Component/Receipts/Create'
import { ReceiptUpdate } from './Component/Receipts/Update'
import { ReceiptDelete } from './Component/Receipts/Delete'
//student
import { StudentView } from './Component/Students/StudentView'
import { StudentCreate } from './Component/Students/Create'
import { StudentUpdate } from './Component/Students/Update'
import { StudentDelete } from './Component/Students/Delete'

//class
import { ClassView } from './Component/Classes/ClassView'
import { ClassCreate } from './Component/Classes/Create'
import { ClassUpdate } from './Component/Classes/Update'
import { ClassDelete } from './Component/Classes/Delete'

//user
import { UserView } from './Component/Users/UserView'
import { UserCreate } from './Component/Users/Create'
import { UserUpdate } from './Component/Users/Update'
import { UserDelete } from './Component/Users/Delete'
import { useState } from 'react'
export const App = () => {
    const [user, setuser] = useState(false)
    let navigate = useNavigate()
    let token = localStorage.getItem("access_token")
    let decode = jwtDecode(token)
    let headerdecode = jwtDecode(token, { header: true });
    if (!headerdecode) {
        console.log('welcome')
    }





    return (
        <div>

            <Header />
            <Routes>
                {headerdecode && (
                    <>
                        <Route path='/UserDashboard' element={<UserDashboard user={user} />} />
                        <Route path='/UserDashboard' element={<UserDashboard />} />
                        <Route path='/AdminDashboard' element={<AdminDashboard />} />
                        <Route path='/class' element={<ClassView />} />
                        <Route path='/class/create' element={<ClassCreate />} />
                        <Route path='/class/update/:id/:className/:classStatus' element={<ClassUpdate />} />
                        <Route path='/class/delete/:id' element={<ClassDelete />} />
                        <Route path='/student' element={<StudentView />} />
                        <Route path='/student/create' element={<StudentCreate />} />
                        <Route path='/student/update/:id/:N/:P/:G/:A' element={<StudentUpdate />} />
                        <Route path='/student/delete/:id' element={<StudentDelete />} />
                        <Route path='/receipt' element={<ReceiptView />} />
                        <Route path='/receipt/create' element={<ReceiptCreate />} />
                        <Route path='/receipt/update/:Name/:id' element={<ReceiptUpdate />} />
                        <Route path='/receipt/delete/:id' element={<ReceiptDelete />} />
                        <Route path='/user' element={<UserView />} />
                        <Route path='/user/create' element={<UserCreate />} />
                        <Route path='/user/update/:id/:admin/:username/:status' element={<UserUpdate />} />
                        <Route path='/user/delete/:id' element={<UserDelete />} />












                    </>
                )}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Services />} />
                <Route path='/contuct' element={<Contuct />} />
                <Route path='/login' element={<Login user={user} setuser={setuser} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgetpassword' element={<Change />} />

            </Routes>
        </div>
    )
}