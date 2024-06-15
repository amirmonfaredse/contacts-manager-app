import { Link } from "react-router-dom";
import { COMMENT, CURRENTLINE, GREEN, PURPLE, } from "../../helpers/colors";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import Spinner from "../Spinner";
const AddContact = () => {
    const { loading, onSubmitForm, onInputChange, contact, groups } = useContext(ContactContext);
    return (
        <>
            {loading ? <Spinner /> : (
                <div className="container" >
                    <div className="grid">
                        <div className="row my-5 text-center">
                            <div className="col rounded" >
                                <h3 className="h3" style={{ color: GREEN }}>
                                    ساخت مخاطب جدید
                                </h3>
                                <form
                                    onSubmit={onSubmitForm}
                                    className="m-5 p-4 d-flex justify-content-start flex-column" style={{ backgroundColor: CURRENTLINE }}>
                                    <input type="text"
                                        name="fullName"
                                        value={contact.fullName}
                                        onChange={onInputChange}
                                        required={true}
                                        placeholder="نام و نام خانوادگی ..."
                                        className="form-control inp-main my-2"
                                    />
                                    <input type="number"
                                        name="phoneNumber"
                                        value={contact.phoneNumber}
                                        onChange={onInputChange}
                                        required={true}
                                        placeholder="شماره تماس ..."
                                        className="form-control inp-main my-2"
                                    />
                                    <input type="email"
                                        name="email"
                                        value={contact.email}
                                        onChange={onInputChange}
                                        required={true}
                                        placeholder="ادرس ایمیل ..."
                                        className="form-control inp-main my-2"
                                    />
                                    <input type="text"
                                        name="profession"
                                        value={contact.pro}
                                        onChange={onInputChange}
                                        required={true}
                                        placeholder="شغل ..."
                                        className="form-control inp-main my-2"
                                    />
                                    <input type="file"
                                        value={contact.image}
                                        // onChange={onInputChange}
                                        name="image"
                                        placeholder="ادرس ایمیل ..."
                                        className="form-control inp-main my-2"
                                    />
                                    <select className="form-select inp-main my-2"
                                        value={contact.group}
                                        onChange={onInputChange}
                                        name="group"
                                        required={true} >
                                        <option value="" selected>انتخاب گروه</option>
                                        {groups.length > 0 && groups.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                                    </select>
                                    <div className=" w-50 my-2 ">
                                        <input type="submit"
                                            className="btn mx-2 mt-3"
                                            value='ساخت مخاطب'
                                            style={{ backgroundColor: PURPLE }} />
                                        <Link to={"/contacts"}
                                            className="btn mx-2 mt-3"
                                            style={{ backgroundColor: COMMENT }}
                                        >انصراف</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default AddContact;