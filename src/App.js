import { BACKGROUND, COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from './helpers/colors';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
// Contact Components
import {
  AddContact,
  Contacts,
  Contact,
  EditContact,
  Navbar,
  ViewContact
} from './components'

// CSS
import './App.css';

// Services
import { serviceCreateContact, serviceDeleteContact, serviceGetAllContacts, serviceGetAllGroups } from "./services/contactService"


const App = () => {
  const navigate = useNavigate()
  const [forceRender, setForceRender] = useState(false)
  // Contacts States
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({})
  const [filteredContacts, setFilteredContacts] = useState([])
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState({ text: '' })
  // Services
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: allContactsData } = await serviceGetAllContacts()
        const { data: allGroupsData } = await serviceGetAllGroups()

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: allContactsData } = await serviceGetAllContacts()

        setContacts(allContactsData);

        setLoading(false)
      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData()
  }, [forceRender])

  const handlerSetContactInfo = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }
  const handlerSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const { status } = await serviceCreateContact(contact);
      if (status === 201) {
        setContact({});
        setForceRender(!forceRender)
        navigate('/contacts')
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  const handlerRemoveContact = async (contactId) => {
    try {
      setLoading(true)
      const response = await serviceDeleteContact(contactId);
      if (response) {
        const { data: contactsData } = await serviceGetAllContacts()
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
                handlerRemoveContact(contactId);
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
    setQuery({ ...query, text: e.target.value });
    const allContacts = contacts.filter((c) => {
      return c.fullName.includes(e.target.value.toLowerCase())
    })
    setFilteredContacts(allContacts)
  }
  return (
    <div className="App" style={{ backgroundColor: BACKGROUND }}>
      <Navbar query={query} search={contactSearch} />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/contacts' element={<Contacts
          contacts={filteredContacts}
          loading={loading}
          confirmDelete={confirmDeleteContact}
        />} />
        <Route path='/contacts/add' element={<AddContact
          loading={loading}
          contact={contact}
          groups={groups}
          handlerSetContactInfo={handlerSetContactInfo}
          handlerSubmitForm={handlerSubmitForm} />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
      </Routes>
    </div>
  );
}

export default App;
