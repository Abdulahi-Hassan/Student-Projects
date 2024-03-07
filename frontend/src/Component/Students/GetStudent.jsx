import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { endpoint, endpoint2 } from '../../api/endpoint'
export const GetStudent = () => {
    const [ApiData, setApiData] = useState([])
    const [search, setsearch] = useState("")
    const SearchData = ApiData.filter(data => (
        data.Name.toLowerCase().includes(search) ||
        data.Name.includes(search)
    ))
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint2);
            setApiData(data)
        }
        load()
    }, [endpoint2])


    return (
        <div>
            <input style={{ width: "300px", float: "right", borderRadius: "26px" }} type="text" placeholder='Search' className='form-control text-center' value={search} onChange={(e) => setsearch(e.target.value)} />
            <Link to={'/student/create'} className="btn btn-info">Create +</Link>
            <Link to={'/AdminDashboard'} className="btn btn-success  ms-5"  >Back</Link>

            <table className=" table table-boredered text-center mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>ClassName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Balance</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {SearchData && SearchData.map((data, index) => (
                        <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.UserID.UserName}</td>
                            <td>{data.ClassID.ClassName}</td>
                            <td>{data.Name}</td>
                            <td>{data.Phone}</td>
                            <td>{data.Address}</td>
                            <td>{data.Balance}</td>
                            <td>{data.Status}</td>
                            <td>{
                                <div>
                                    <Link to={`/student/update/${data._id}/${data.Name}/${data.Phone}/${data.Gender}/${data.Address}`} className="btn btn-primary mx-2">Edit</Link>
                                    <Link to={`/student/delete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
                                </div>
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


