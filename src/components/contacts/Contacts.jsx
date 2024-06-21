import { Spinner, Contact, BtnAddContact } from '../index'
import { CURRENTLINE, ORANGE } from '../../helpers/colors';

import { Suspense, useContext } from 'react';
import { ContactContext } from '../../context/contactContext';
import ErrorMainLayout from '../errors/ErrorMainLayout';
import ErrorNotFound from '../errors/ErrorNotFound';
const Contacts = () => {
    const { filteredContacts, confirmDeleteContact } = useContext(ContactContext)
    return (
        <>
            <section className="container ">
                <BtnAddContact />
            </section>
            <Suspense fallback={<Spinner />}>
                <section className="container">
                    <div className="row">
                        {filteredContacts.length > 0
                            ? filteredContacts.map((c) => <Contact key={c.id} contact={c}
                                confirmDelete={() => confirmDeleteContact(c.id, c.fullName)} />)
                            : (
                                <ErrorNotFound />
                            )}
                    </div>
                </section>
            </Suspense>
        </>
    )
}
export default Contacts;