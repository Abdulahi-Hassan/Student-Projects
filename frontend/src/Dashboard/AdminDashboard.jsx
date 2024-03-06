import { StudentView } from '../Component/Students/StudentView'
import { useState } from 'react'
export const AdminDashboard = () => {
    const [open, setopen] = useState(false)

    const handle = () => {
        setopen(true)
    }
   

    return (
        <div style={{ marginTop: "68px" }}>
            <div className="row">
                <div className="col-6 bg-danger  " style={{ height: "600px", width: "300px" }}>
                    <div className="mt-4  m-4  ">
                        <div className="col-3">
                            <button onClick={handle} className="btn btn-light m-3" style={{ width: "170px" }}>Student</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-3 " style={{ width: "170px" }}>Class</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-3 " style={{ width: "170px" }}>User</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-3 " style={{ width: "170px" }}>Receipt</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-3 " style={{ width: "170px" }}>Setting</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 text-center" style={{ marginTop: "-10px" }}>
                    {open && (
                        <StudentView />
                    )}
                </div>
            </div>
        </div>
    )
}