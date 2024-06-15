import { serveCreateContact } from "../services/contactService";

const onSubmitForm = async (e,
    contact,
    contacts,
    setContact,
    setContacts,
    setFilteredContacts,
    navigate,
    setLoading,) => {
    e.preventDefault()
    try {
        const { status, data } = await serveCreateContact(contact);
        if (status === 201) {
            setLoading(true);
            const allContacts = [...contacts, data];
            setContacts(allContacts)
            setFilteredContacts(allContacts)
            setContact({});
            setLoading(false)
            navigate('/contacts')
        }
    } catch (err) {
        console.log(err.message);
        setLoading(false);

    }
}
export default onSubmitForm