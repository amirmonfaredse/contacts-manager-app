import { TbTrashFilled } from "react-icons/tb";
import { CURRENTLINE, CYAN, FOREGROUND, ORANGE, RED } from "../../helpers/colors";
import { FaPen, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = ({ contact, confirmDelete }) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-xl-6">
            <div className="card m-2" style={{ backgroundColor: CURRENTLINE }}>
                <div className="card-body px-3">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-4 col-sm-4 col-md-4 col-sm-4" >
                            <img src={contact.image} style={{ height: '170px', width: '170px', objectFit: 'cover' }} className="img-fluid rounded" alt={`تصویر مخاطب ${contact.fullName}`} />
                        </div>
                        <div className="col-7 col-sm-7 col-md-7 col-sm-7">
                            <ul className="list-group p-0" style={{ backgroundColor: FOREGROUND }}>
                                <li className="list-group-item ">
                                    نام و نام خانوادگی : {'  '}
                                    <span className="fw-bold">
                                        {contact.fullName}
                                    </span>
                                </li>

                                <li className="list-group-item my-2">
                                    شماره موبایل : {'  '}
                                    <span className="fw-bold">
                                        {contact.phoneNumber}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    ایمیل : {'  '}
                                    <span className="fw-bold">
                                        {contact.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
                                <FaRegEye />
                            </Link>
                            <Link to={`/contacts/edit/${contact.id}`} className="btn my-1" style={{ backgroundColor: CYAN }}>
                                <FaPen />
                            </Link>
                            <button onClick={confirmDelete} className="btn my-1" style={{ backgroundColor: RED }}>
                                <TbTrashFilled />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;