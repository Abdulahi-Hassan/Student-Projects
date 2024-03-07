import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import { endpoint, endpoint3 } from '../../api/endpoint'
import axios from "axios"
export const UserDelete = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        async function load() {
            let { data } = await axios.delete(`${endpoint3}/${id}`)
            if (data.status) {
                toast.success(data.message)
                setTimeout(() => {
                    navigate('/user')
                }, 3000);
            }
        }
        load()
    }, [endpoint3])
    return (
        <div style={{ marginTop: "140px" }}>
            <Toaster />
        </div>
    )
}