import { CURRENTLINE, GREEN, PINK } from "../../helpers/colors";
import { Spinner } from "../index";
import { serveGetContact, serveGetGroup } from "../../services/contactService";
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoPerson } from "react-icons/io5";
import { FaPhoneFlip, FaUserGroup } from "react-icons/fa6";
import { MdEmail, MdWork } from "react-icons/md";
const ViewContact = () => {
    const { contactId } = useParams()
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({})
    const [group, setGroup] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data: contactData } = await serveGetContact(contactId);
                const { data: groupData } = await serveGetGroup(contactData.group);
                setContact(contactData);
                setGroup(groupData)
                setLoading(false)
            } catch (err) {
                toast.error("برای دریافت اطلاعات مخاطب مشکلی پیش آمده ، مجددا تلاش کنید")
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <section className="view-contact-intro p3">
                <div className="container">

                    <div className="row my-3 text-center">
                        <h3 className="h3 fw-bold" style={{ color: GREEN }}>
                            اطلاعات مخاطب
                        </h3>
                    </div>

                    {loading ? <Spinner /> : (
                        <>
                            {Object.keys(contact).length > 0 && (
                                <div className="grid">
                                    <div className="row my-3">
                                        <div className="col d-flex pe-0" style={{ backgroundColor: CURRENTLINE }}>
                                            <div className="w-25">
                                                <img className="img-fluid" src={contact.image} style={{ height: '300px', width: '330px', objectFit: 'cover' }} alt={`نصویر مخاطب${contact.fullName}`} />
                                            </div>
                                            <div className="w-75  my-5">
                                                <ul className="list-group text-end ">
                                                    <li className="list-group-item">
                                                        <IoPerson className="ms-2" /> نام و نام خانوادگی :
                                                        <span className="fw-bold me-2">
                                                            {contact.fullName}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <FaPhoneFlip className="ms-2" />شماره تلفن :
                                                        <span className="fw-bold me-2">
                                                            {contact.phoneNumber}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <MdEmail className="ms-2" />
                                                        ایمیل :
                                                        <span className="fw-bold me-2">
                                                            {contact.email}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <MdWork className="ms-2" />شغل :
                                                        <span className="fw-bold me-2">
                                                            {contact.profession}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <FaUserGroup className="ms-2" />گروه :
                                                        <span className="fw-bold me-2">
                                                            {contact.group}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={"/contacts"} className="btn w-25 mt-3" style={{ backgroundColor: PINK }}>بازگشت به صفحه اصلی</Link>
                                </div>
                            )}
                        </>
                    )
                    }
                </div>
            </section>
        </>
    )
}
export default ViewContact;