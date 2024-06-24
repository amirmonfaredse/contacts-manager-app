import { useNavigate, useParams } from "react-router-dom";
import { CURRENTLINE, GREEN, } from "../../helpers/colors";
import { useEffect, useContext, Suspense } from "react";
import { serveEditContact, serveGetContact } from "../../services/contactService";

import { ContactContext } from "../../context/contactContext";
import { VectorImgForForms, OriginalForm, Spinner } from "../index";


import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const EditContact = () => {


    const { setLoading,
        contacts,
        setContacts,
        contact,
        setContact,
        setFilteredContacts,
        groups, } = useContext(ContactContext);
    const { contactId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {


        const fetchData = async () => {
            try {
                setLoading(true);
                const { data: contactData } = await serveGetContact(contactId);
                setContact(contactData);
                setLoading(false)
            } catch (err) {
                toast.error("مخاطب ویرایش نشد مجددا تلاش کنید")
                setLoading(false)
            }
        }
        fetchData()
    }, [contactId, setLoading, setContact])
    const onSubmitUpdate = async (values) => {
        try {
            setLoading(true)
            const { data, status } = await serveEditContact(values, contactId)
            if (status === 200) {
                const allContacts = [...contacts];
                const contactIndex = allContacts.findIndex(
                    c => c.id === parseInt(contactId)
                )
                allContacts[contactIndex] = { ...data };
                setContacts(allContacts);
                setFilteredContacts(allContacts);
                navigate('/contacts')
                toast.success("مخاطب با موفقیت ویرایش شد")
            }
            setLoading(false)
        } catch (err) {
            toast.error("مشکلی پیش آمده است ،مجددا تلاش کنید")
            setLoading(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>ویرایش مخاطب</title>
            </Helmet>
            <Suspense fallback={<Spinner />}>
                <div className="container" >
                    <div className="grid">
                        <div className="row text-center">
                            <div className="col rounded" >
                                <h3 className="h3 p-3" style={{ color: GREEN }}>
                                    ویرایش مخاطب
                                </h3>
                                <div className="container d-flex" style={{ backgroundColor: CURRENTLINE, borderRadius: 10 }}
                                >
                                    <div className="col-12 col-sm-12 col-md-6 col-xl-6">
                                        <OriginalForm onSubmitForm={onSubmitUpdate} groups={groups} contact={contact} />
                                    </div>
                                    <VectorImgForForms />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}
export default EditContact;