import { BACKGROUND } from './helpers/colors';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ContactContext } from './context/contactContext';
// Contact Components
import {
  AddContact,
  Contacts,
  EditContact,
  Navbar,
  ViewContact
} from './components'

// CSS
import './App.css';

// Services
import {
  serveCreateContact,
  serveDeleteContact,
  serveGetAllContacts,
  serveGetAllGroups
} from "./services/contactService"
// Import Handlers
import {
  onSubmitForm,
  onInputChange,
  onDeleteContact,
  confirmDeleteContact, contactSearch
} from "./handlers"

const App = () => {
  const navigate = useNavigate()
  // Contacts States
  const [contact, setContact] = useState({})
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(false)
  // Services
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: allContactsData } = await serveGetAllContacts()
        const { data: allGroupsData } = await serveGetAllGroups()

        setContacts(allContactsData);
        setFilteredContacts(allContactsData)
        setGroups(allGroupsData)

        setLoading(false)
      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      contact,
      setContact,
      contacts,
      setContacts,
      filteredContacts,
      setFilteredContacts,
      groups,
      onInputChange: (e) => {
        return onInputChange(e, contact, setContact);
      },
      onSubmitForm: (e) => {
        return onSubmitForm(e,
          contact,
          contacts,
          setContact,
          setContacts,
          setFilteredContacts,
          navigate,
          setLoading,)
      },
      onDeleteContact: (contactId) => {
        return onDeleteContact(contactId, setLoading, setContacts)
      },
      confirmDeleteContact: (contactId, contactFullname) => {
        return confirmDeleteContact(contactId, contactFullname, (id) => onDeleteContact(id, setContact, setLoading))
      },
      contactSearch: (query) => {
        return contactSearch(query, contacts, setFilteredContacts);
      }
    }}>
      <div className="App" style={{ backgroundColor: BACKGROUND }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/contacts" />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contacts/add' element={<AddContact />} />
          <Route path='/contacts/edit/:contactId' element={<EditContact />} />
          <Route path='/contacts/:contactId' element={<ViewContact />} />
        </Routes>
      </div>
    </ContactContext.Provider >

  );
}

export default App;
