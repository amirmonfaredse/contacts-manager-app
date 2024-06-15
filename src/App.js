import { BACKGROUND, COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from './helpers/colors';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
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


const App = () => {
  const navigate = useNavigate()
  // Contacts States
  const [contact, setContact] = useState({})
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(false)
  const [contactQuery, setContactQuery] = useState({ text: "" })
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

  // Handlers
  const onInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }
  const onSubmitForm = async (e) => {
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
  const onDeleteContact = async (contactId) => {
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
  const confirmDeleteContact = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir='rtl'
            style={{ backgroundColor: CURRENTLINE, border: `1px solid ${PURPLE}`, borderRadius: "1rem" }}
            className='p-4'
          >
            <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
            <p style={{ color: FOREGROUND }}>
              آیا از پاک کردن مخاطب {contactFullname} اطمینان دارید؟
            </p>
            <button
              className='btn mx-2'
              style={{ backgroundColor: PURPLE }}
              onClick={() => {
                onDeleteContact(contactId);
                onClose()
              }}>مطمئن هستم
            </button>
            <button onClick={onClose}
              className='btn'
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
            </button>
          </div>

        )
      }
    })
  }
  const contactSearch = (e) => {
    setContactQuery({ ...contactQuery, text: e.target.value });
    const allContacts = contacts.filter((c) => {
      return c.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(allContacts)
    setFilteredContacts(allContacts)
  }
  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      contact,
      setContact,
      contacts,
      setContacts,
      contactQuery,
      filteredContacts,
      setFilteredContacts,
      groups,
      onInputChange,
      onSubmitForm,
      confirmDeleteContact,
      contactSearch
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
    </ContactContext.Provider>

  );
}

export default App;
