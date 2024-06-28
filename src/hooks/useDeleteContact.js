import { toast } from "react-toastify";
import { serveDeleteContact } from "../services/contactService";
import { useContext } from "react";
import { ContactContext } from "../context/contactContext";


import { confirmAlert } from "react-confirm-alert";
import { COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from "../helpers/colors";
import { FaCheck } from "react-icons/fa6";

const useDeleteContact = () => {
    const { contacts, setContacts, setLoading, setFilteredContacts } = useContext(ContactContext);
    const onDeleteContact = async (contactId) => {
        try {
            setLoading(true)
            const { status } = await serveDeleteContact(contactId);
            if (status === 200) {
                setLoading(false);
                const allContacts = contacts.filter(contact => contact.id !== contactId);
                setContacts(allContacts)
                setFilteredContacts(allContacts)
                toast.success("مخاطب با موفقیت حذف شد");
            }
            setLoading(false)
        }
        catch (err) {
            toast.error("حذف کردن مخاطب انجام نشد ، مجددا تلاش کنید")
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
                            }}>مطمئن هستم<FaCheck />
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
    return confirmDeleteContact;

}

export default useDeleteContact;