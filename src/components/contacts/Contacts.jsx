import {Spinner ,Contact ,BtnAddContact} from '../index'
import { CURRENTLINE, ORANGE } from '../../helpers/colors';

import { useContext } from 'react';
import { ContactContext } from '../../context/contactContext';
const Contacts = () => {
    const { loading, filteredContacts, confirmDeleteContact } = useContext(ContactContext)
    return (
        <>
            <section className="container ">
                <BtnAddContact />
            </section>
            {loading ? <Spinner /> : (
                <section className="container">
                    <div className="row">
                        {filteredContacts.length > 0
                            ? filteredContacts.map((c) => <Contact key={c.id} contact={c}
                                confirmDelete={() => confirmDeleteContact(c.id, c.fullName)} />)
                            : (
                                <div className="text-center py-5" style={{ backgroundColor: CURRENTLINE }}>
                                    <p className="h3" style={{ color: ORANGE }}>
                                        مخاطب یافت نشد ...
                                    </p>
                                    <img className='w-25 img-fluid' src={require('../../assets/gifs/Connection Error.gif')} alt="پیدانشد" />
                                </div>
                            )}
                    </div>
                </section>
            )}
        </>
    )
}
export default Contacts;