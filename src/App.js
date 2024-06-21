import { BACKGROUND } from './helpers/colors';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ContactContext } from './context/contactContext';

import { ToastContainer, toast } from 'react-toastify';
// Contact Components
import {
  Navbar,
  Contacts,
  AddContact,
  EditContact,
  ViewContact,
} from './components'

// CSS
import './App.css';

// Services
import {
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
        toast.error(" دریافت مخاطبین از سرور به مشکل خورده است مجددا تلاش کنید")
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
      onSubmitForm: (values) => {
        return onSubmitForm(values,
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
        return confirmDeleteContact(contactId, contactFullname, (id) => onDeleteContact(id, contacts, setContact, setFilteredContacts, setLoading))
      },
      contactSearch: (query) => {
        return contactSearch(query, contacts, setFilteredContacts);
      }
    }}>
      <div className="App" style={{ backgroundColor: BACKGROUND }}>
        <Navbar />
        <ToastContainer rtl={true} theme="colored" />
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
