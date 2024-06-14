import { CURRENTLINE, GREEN } from "../../helpers/colors";
import Spinner from "../Spinner";
import { serviceGetContact, serviceGetGroup } from "../../services/contactService";
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const ViewContact = () => {
    const { contactId } = useParams()
    console.log(contactId)
    const { loading, setLoading } = useState(false);
    const { contact, setContact } = useState({})
    const { group, setGroup } = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data: contactData } = await serviceGetContact(contactId);
                const { data: groupData } = await serviceGetGroup(contactData.group);
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
                </div>
                {loading ? <Spinner /> : (
                    <div className="grid">
                        <div className="row my-3">
                            <div className="col" style={{ backgroundColor: CURRENTLINE }}>
                                <div className="img-box">
                                    <img src={require("../../assets/profiles/AmirrezaMonfared.jpg")} alt={`تصویر مخاطب ${contact.fullName}`} />
                                </div>
                                <div className="info-box">
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
                    </div>
                )}
            </section>
        </>
    )
}
export default ViewContact;