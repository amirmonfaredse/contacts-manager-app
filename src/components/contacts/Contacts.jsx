import { Spinner, Contact, BtnAddContact } from '../index'

import { Suspense, useContext } from 'react';
import { ContactContext } from '../../context/contactContext';
import ErrorNotFound from '../errors/ErrorNotFound';
import useDeleteContact from '../../hooks/useDeleteContact';
const Contacts = () => {
    const { filteredContacts } = useContext(ContactContext)
    const confirmDeleteContact = useDeleteContact()
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
                                confirmDelete={() => confirmDeleteContact(c.id, c.fullName)} />
                            )
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