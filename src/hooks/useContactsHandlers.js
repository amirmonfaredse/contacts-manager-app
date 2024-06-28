import { useContext } from "react";
import { ContactContext } from '../context/contactContext'
import { serveCreateContact, serveEditContact } from "../services/contactService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const useSubmitContactHandlers = () => {
    const {
        contacts,
        setContacts,
        setFilteredContacts,
        navigate,
        setLoading
    } = useContext(ContactContext)
    const { contactId } = useParams()
    const onSubmitForm = async (values) => {
        try {
            const { status, data } = await serveCreateContact(values);
            if (status === 201) {
                setLoading(true);
                const allContacts = [...contacts, data];
                setContacts(allContacts)
                setFilteredContacts(allContacts)
                setLoading(false)
                toast.success('مخاطب با موفقیت ایجاد شد')
            }
        } catch (err) {
            toast.error('مخاطب ایجاد نشد ، مجددا تلاش کنید')
            setLoading(false);

        } finally {
            navigate('/contacts')
        }
    }
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
    return { onSubmitForm, onSubmitUpdate };
}
export default useSubmitContactHandlers;