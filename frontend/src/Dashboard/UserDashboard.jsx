import axios from "axios"
import { useEffect } from "react"
import { endpoint } from "../api/endpoint"
export const UserDashboard = ({ user }) => {
    console.log(user)
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(`${endpoint + '/class'}/${user.id}`)
            console.log(data)
        }
        load()
    }, [endpoint])
    return (
        <div style={{ marginTop: "68px" }}>
            <div className="row">

                <div className="col-6 bg-danger  " style={{ height: "600px", width: "300px" }}>
                    <div className="mt-4    " style={{ margin: "32px" }}>
                        <div className="col-3">
                            <img src={`http://localhost:3000/images/${user.Profile}`} alt="" width="200%" height="200%" style={{ borderRadius: "50%", marginLeft: "53px" }} />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light m-4 " style={{ width: "170px" }}>Class</button>
                        </div>

                        <div className="col-6 text-center" style={{ marginTop: "-10px" }}>
                        </div></div>
                </div>
            </div>
        </div>
    )
}