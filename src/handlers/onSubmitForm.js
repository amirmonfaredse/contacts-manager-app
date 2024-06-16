import { serveCreateContact } from "../services/contactService";

const onSubmitForm = async (values,
    contact,
    contacts,
    setContact,
    setContacts,
    setFilteredContacts,
    navigate,
    setLoading,) => {
    try {
        const { status, data } = await serveCreateContact(values);
        if (status === 201) {
            setLoading(true);
            const allContacts = [...contacts, data];
            setContacts(allContacts)
            setFilteredContacts(allContacts)
            setLoading(false)
            navigate('/contacts')
        }
    } catch (err) {
        console.log(err.message);
        setLoading(false);

    }
}
export default onSubmitForm