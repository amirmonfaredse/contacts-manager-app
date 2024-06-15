import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => { },
    contact: {},
    setContact: () => { },
    contacts: [],
    setContacts: () => { },
    filteredContacts: [],
    setFilteredContact: () => { },
    groups: {},
    setGroups: () => { },
    contactQuery: {},
    handlerSetContactInfo: () => { },
    handlerRemoveContact: () => { },
    contactSearch: () => { },
})