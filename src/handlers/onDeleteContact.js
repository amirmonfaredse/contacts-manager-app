import { serveDeleteContact, serveGetAllContacts } from "../services/contactService";

const onDeleteContact = async (contactId, setContacts, setLoading) => {
    try {
        setLoading(true)
        const response = await serveDeleteContact(contactId);
        if (response) {
            const { data: contactsData } = await serveGetAllContacts()
            setContacts(contactsData)
        }
        setLoading(false)
    }
    catch (err) {
        console.log(err.message);
        setLoading(false);
    }
}
export default onDeleteContact