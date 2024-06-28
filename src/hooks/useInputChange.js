import _ from "lodash"
import { useContext } from "react"
import { ContactContext } from "../context/contactContext"


const useInputChange = () => {
    const { setFilteredContacts, contacts } = useContext(ContactContext)
    const contactSearch = _.debounce((query) => {
        if (!query) return setFilteredContacts([...contacts])
        setFilteredContacts(
            contacts.filter(contact => {
                return contact.fullName.toLowerCase().includes(query.toLowerCase())
            })
        )
    }, 500)
    return contactSearch;
}
export default useInputChange;