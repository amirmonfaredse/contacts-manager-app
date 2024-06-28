import { useNavigate, useParams } from "react-router-dom";
import { CURRENTLINE, GREEN, } from "../../helpers/colors";
import { useEffect, useContext, Suspense } from "react";
import { serveEditContact, serveGetContact } from "../../services/contactService";

import { ContactContext } from "../../context/contactContext";
import { VectorImgForForms, OriginalForm, Spinner } from "../index";


import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useSubmitContactHandlers from "../../hooks/useContactsHandlers";

const EditContact = () => {
    const { onSubmitUpdate } = useSubmitContactHandlers()
    const { contactId } = useParams()
    const {
        setLoading,
        contact,
        setContact,
        groups, } = useContext(ContactContext);
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