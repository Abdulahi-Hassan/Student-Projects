import { Link } from "react-router-dom"
export const AllPrivate = ({ data, isopen,Student }) => {
    return (
        <div>
            <div className="row">
                <div className="col-6 bg-danger  " style={{ height: "600px", width: "300px" }}>
                    <div className="mt-4    " style={{ margin: "32px" }}>
                        <div className="col-3">
                            <Link to={`/user/single/update/${data._id}/${data.Email}/${data.UserName}/${data.Profile}`} style={{ width: "170px" }}>
                                <img src={`http://localhost:3000/images/${data.Profile}`} alt="" width="200%" height="200%" style={{ borderRadius: "50%", marginLeft: "53px" }} />
                            </Link>

                        </div>
                        <div className="col-3">
                            <button onClick={() => isopen(true)} className="btn btn-light m-4 " style={{ width: "170px" }}>Dashboard</button>
                        </div>
                        <div className="col-3">
                            <Link to={'/about'} className="btn btn-light m-4 " style={{ width: "170px" }}>About</Link>
                        </div>
                        <div className="col-3">
                            <Link to={'/service'} className="btn btn-light m-4 " style={{ width: "170px" }}>Services</Link>
                        </div>
                        <div className="col-3">
                           {Student && (
                             <Link to={'/ReceiptCreate1'} className="btn btn-light m-4 " style={{ width: "170px" }}>Information</Link>
                             )}
                             </div>
                        <div className="col-3">
                        </div>
                    </div>
                </div>
                <div className="col-6 text-center mx-auto" style={{ margin: "30px" }}>
                </div>
            </div>
        </div>
    )
}