import Contact from './Contact'
import Spinner from '../Spinner'
import { CURRENTLINE, ORANGE } from '../../helpers/colors';
import BtnAddContact from './BtnAddContact';
const Contacts = ({ loading, contacts, confirmDelete, handlerRemoveContact }) => {
    return (
        <>
            <section className="container">
                <BtnAddContact />
            </section>
            {loading ? <Spinner /> : (
                <section className="container">
                    <div className="row">
                        {contacts.length > 0
                            ? contacts.map((c) => <Contact key={c.id} contact={c}
                                confirmDelete={() => confirmDelete(c.id, c.fullName)}
                                handlerRemoveContact={handlerRemoveContact}
                            />)
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