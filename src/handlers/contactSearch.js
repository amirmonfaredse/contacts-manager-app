import _ from "lodash"

const contactSearch = _.debounce((query, contacts, setFilteredContacts) => {
    if (!query) return setFilteredContacts([...contacts])
    setFilteredContacts(
        contacts.filter(contact => {
            return contact.fullName.toLowerCase().includes(query.toLowerCase())
        })
    )
}, 500)


export default contactSearch