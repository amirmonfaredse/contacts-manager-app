const contactSearch = (e, contacts, contactQuery, setContactQuery, setFilteredContacts) => {
    setContactQuery({ ...contactQuery, text: e.target.value });
    const allContacts = contacts.filter((c) => {
        return c.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredContacts(allContacts)
}
export default contactSearch