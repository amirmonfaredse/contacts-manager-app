// import { toast } from "react-toastify";
// import { serveEditContact } from "../services/contactService";

// const onSubmitFormUpdate = async (values, contacts, navigate, contactId, setLoading, setContacts, setFilteredContacts) => {

//     try {
//         setLoading(true)
//         const { data, status } = await serveEditContact(values, contactId)
//         if (status === 200) {
//             const allContacts = [...contacts];
//             const contactIndex = allContacts.findIndex(
//                 c => c.id === parseInt(contactId)
//             )
//             allContacts[contactIndex] = { ...data };
//             setContacts(allContacts);
//             setFilteredContacts(allContacts);
//             navigate('/contacts')
//             toast.success("مخاطب با موفقیت ویرایش شد")
//         }
//         setLoading(false)
//     } catch (err) {
//         toast.error("مشکلی پیش آمده است ،مجددا تلاش کنید")
//         setLoading(false)
//     }
// }
// export default onSubmitFormUpdate;