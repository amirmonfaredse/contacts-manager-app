import { toast } from "react-toastify";
import { serveDeleteContact } from "../services/contactService";

const onDeleteContact = async (contactId, contacts, setContacts, setFilteredContacts, setLoading) => {
    try {
        setLoading(true)
        const { status } = await serveDeleteContact(contactId);
        if (status === 200) {
            setLoading(false);
            const allContacts = contacts.filter(contact => contact.id !== contactId);
            setContacts(allContacts)
            setFilteredContacts(allContacts)
            toast.success("مخاطب با موفقیت حذف شد");
        }
        setLoading(false)
    }
    catch (err) {
        toast.error("حذف کردن مخاطب انجام نشد ، مجددا تلاش کنید")
        setLoading(false);
    }
}
export default onDeleteContact