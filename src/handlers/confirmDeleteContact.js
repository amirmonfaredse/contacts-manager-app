import { confirmAlert } from "react-confirm-alert";
import {  COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW } from "../helpers/colors";
import { FaCheck } from "react-icons/fa6";

const confirmDeleteContact = (contactId, contactFullname, onDeleteContact) => {
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
                        }}>مطمئن هستم<FaCheck  />
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
export default confirmDeleteContact;