import { Link, useNavigate, useParams } from "react-router-dom";
import { COMMENT, CURRENTLINE, GREEN, PURPLE, } from "../../helpers/colors";
import { useEffect, useState } from "react";
import { serviceEditContact, serviceGetAllGroups, serviceGetContact } from "../../services/contactService";
import Spinner from "../Spinner";


const EditContact = () => {
    const { contactId } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({});
    const [groups, setGroups] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data: contactData } = await serviceGetContact(contactId);
                const { data: groupsData } = await serviceGetAllGroups();
                setContact(contactData);
                setGroups(groupsData);
                setLoading(false)
            } catch (err) {
                console.log(err.message);
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    const handlerUpdataContactInfo = (e) => {
        e.preventDefault()
        setContact({
            ...contact, [e.target.name]: [e.target.value],
        })
    }
    const handlerSubmitUpdate = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await serviceEditContact(contact, contactId)
            if (data) {
                navigate('/contacts')
            }

            setLoading(false)

        } catch (err) {
            console.log(err.message)
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <Spinner /> :
                (
                    <div className="container" >
                        <div className="grid">
                            <div className="row my-5 text-center">
                                <div className="col rounded" >
                                    <h3 className="h3" style={{ color: GREEN }}>
                                        ویرایش مخاطب
                                    </h3>
                                    <form
                                        onSubmit={handlerSubmitUpdate}
                                        className="m-5 p-4 d-flex justify-content-start flex-column" style={{ backgroundColor: CURRENTLINE }}>
                                        <input type="text"
                                            name="fullName"
                                            value={contact.fullName}
                                            onChange={handlerUpdataContactInfo}
                                            required={true}
                                            placeholder="نام و نام خانوادگی ..."
                                            className="form-control inp-main my-2"
                                        />
                                        <input type="number"
                                            name="phoneNumber"
                                            value={contact.phoneNumber}
                                            onChange={handlerUpdataContactInfo}
                                            required={true}
                                            placeholder="شماره تماس ..."
                                            className="form-control inp-main my-2"
                                        />
                                        <input type="email"
                                            name="email"
                                            value={contact.email}
                                            onChange={handlerUpdataContactInfo}
                                            required={true}
                                            placeholder="ادرس ایمیل ..."
                                            className="form-control inp-main my-2"
                                        />
                                        <input type="text"
                                            name="profession"
                                            value={contact.profession}
                                            onChange={handlerUpdataContactInfo}
                                            required={true}
                                            placeholder="شغل ..."
                                            className="form-control inp-main my-2"
                                        />
                                        <input type="file"
                                            value={contact.image}
                                            onChange={handlerUpdataContactInfo}
                                            name="image"
                                            placeholder="ادرس ایمیل ..."
                                            className="form-control inp-main my-2"
                                        />
                                        <select className="form-select inp-main my-2"
                                            value={contact.group}
                                            onChange={handlerUpdataContactInfo}
                                            name="group"
                                            required={true} >
                                            <option value="" selected>انتخاب گروه</option>
                                            {groups.length > 0 && groups.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                                        </select>
                                        <div className=" w-50 my-2 ">
                                            <input type="submit"
                                                className="btn mx-2 mt-3"
                                                value='ویرایش مخاطب'
                                                style={{ backgroundColor: PURPLE }} />
                                            <Link to={"/contacts"}
                                                className="btn mx-2 mt-3"
                                                style={{ backgroundColor: COMMENT }}
                                            >انصراف</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}
export default EditContact;