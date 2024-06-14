import { TbTrashFilled } from "react-icons/tb";
import { CURRENTLINE, CYAN, ORANGE, RED } from "../../helpers/colors";
import { FaPen, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";



const Contact = ({ contact }) => {
    return (
        <div className="col-md-6">
            <div className="card mx-2" style={{ backgroundColor: CURRENTLINE }}>
                <div className="card-body px-3">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            {/*alt={`تصویر مخاطب ${contact.name}`}*/}
                            <img src={require('../../assets/profiles/AmirrezaMonfared.jpg')} className="img-fluid rounded" alt="تصویر مخاطب" />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group p-0">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوادگی : {'  '}
                                    <span className="fw-bold">
                                        {contact.fullName}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    شماره موبایل : {'  '}
                                    <span className="fw-bold">
                                        {contact.phoneNumber}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    گروه : {'  '}
                                    <span className="fw-bold">
                                        {contact.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
                                <FaRegEye />
                            </Link>
                            <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                                <FaPen />
                            </button>
                            <button className="btn my-1" style={{ backgroundColor: RED }}>
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