import { serveDeleteContact } from "../services/contactService";

const onDeleteContact = async (contactId,contacts, setContacts,setFilteredContacts, setLoading) => {
    try {
        setLoading(true)
        const { status} = await serveDeleteContact(contactId);
        if (status === 200) {

            setLoading(false);
            const allContacts = contacts.filter(contact => contact.id !== contactId);
            setContacts(allContacts)
            setFilteredContacts(allContacts)
        }
        setLoading(false)
    }
    catch (err) {
        console.log(err.message);
        setLoading(false);
    }
}
export default onDeleteContact