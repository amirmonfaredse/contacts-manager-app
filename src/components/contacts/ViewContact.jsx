import { CURRENTLINE, GREEN, PINK } from "../../helpers/colors";
import Spinner from "../Spinner";
import { serveGetContact, serveGetGroup } from "../../services/contactService";
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
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
                console.log(err.message)
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
                                                <img className="img-fluid" src={require("../../assets/profiles/AmirrezaMonfared.jpg")} alt='تصویرمخاطب' />
                                            </div>
                                            <div className="w-75  my-5">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        نام و نام خانوادگی :
                                                        <span className="fw-bold">
                                                            {contact.fullName}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        شماره تلفن :
                                                        <span className="fw-bold">
                                                            {contact.phoneNumber}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        ایمیل :
                                                        <span className="fw-bold">
                                                            {contact.email}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        شغل :
                                                        <span className="fw-bold">
                                                            {contact.profession}
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        نام و نام خانوادگی :
                                                        <span className="fw-bold">
                                                            {contact.fullName}
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