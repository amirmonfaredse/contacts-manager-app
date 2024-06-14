import { BACKGROUND } from './helpers/colors';
import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

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
import { serviceCreateContact, serviceGetAllContacts, serviceGetAllGroups } from "./services/contactService"


const App = () => {
  const navigate = useNavigate()
  const [forceRender, setForceRender] = useState(false)
  // Contacts States
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({
    fullName: '',
    image: "",
    phoneNumber: "",
    email: '',
    profession: "",
    groups: ""
  })

  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(false)
  // Services
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: allContactsData } = await serviceGetAllContacts()
        const { data: allGroupsData } = await serviceGetAllGroups()

        setContacts(allContactsData);
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
  return (
    <div className="App" style={{ backgroundColor: BACKGROUND }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/contacts' element={<Contacts contacts={contacts} loading={loading} />} />
        <Route path='/contacts/add' element={<AddContact
          loading={loading}
          contact={contact}
          groups={groups}
          handlerSetContactInfo={handlerSetContactInfo}
          handlerSubmitForm={handlerSubmitForm} />} />
        <Route path='/contacts/:contactId' element={<Contact />} />
        <Route path='/contacts/edit/:contactid' element={<EditContact />} />
        <Route path='/contacts/:contactId' element={<ViewContact />}  />
      </Routes>
    </div>
  );
}

export default App;
