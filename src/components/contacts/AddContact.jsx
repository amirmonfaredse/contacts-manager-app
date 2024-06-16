import { Link } from "react-router-dom";
import { COMMENT, CURRENTLINE, GREEN, PURPLE, RED } from "../../helpers/colors";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import Spinner from "../Spinner";


// Form Validation 
import { useFormik } from "formik";
import { contactSchema } from '../../validation/contactValidation'
const AddContact = () => {
    const { loading, onSubmitForm, onInputChange, contact, groups } = useContext(ContactContext);
    const formik = useFormik({
        initialValues: {
            fullName: '',
            // image: null,
            phoneNumber: '',
            profession: '',
            email: '',
            group: '',

        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            onSubmitForm(values)
        }

    })
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
                                    onSubmit={formik.handleSubmit}
                                    className="m-5 p-4 d-flex justify-content-start flex-column" style={{ backgroundColor: CURRENTLINE }}>
                                    <input type="text"
                                        name="fullName"
                                        id="fullName"
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="نام و نام خانوادگی ..."
                                        className="form-control inp-main my-2"
                                    />
                                    {formik.touched.fullName && formik.errors.fullName ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.fullName}</span>) : null}
                                    <input type="number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="شماره تماس ..."
                                        className="form-control inp-main my-2"
                                    />
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.phoneNumber}</span>) : null}

                                    <input type="email"
                                        name="email"
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        placeholder="ادرس ایمیل ..."
                                        className="form-control inp-main my-2"
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.email}</span>) : null}

                                    <input type="text"
                                        name="profession" id="profession"
                                        value={formik.values.profession}
                                        onChange={formik.handleChange}
                                        placeholder="شغل ..."
                                        onBlur={formik.handleBlur}
                                        className="form-control inp-main my-2"
                                    />
                                    {formik.touched.profession && formik.errors.profession ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.profession}</span>) : null}

                                    <input type="file"
                                        id="image"
                                        // value={formik.values.image}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        name="image"
                                        placeholder="ادرس ایمیل ..."
                                        className="form-control inp-main my-2"
                                    />
                                    {/* {formik.touched.image && formik.errors.image ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.image}</span>) : null} */}

                                    <select className="form-select inp-main my-2"
                                        value={formik.values.group}
                                        onChange={formik.handleChange}
                                        name="group" id="group"
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">انتخاب گروه</option>
                                        {groups.length > 0 && groups.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                                    </select>
                                    {formik.touched.group && formik.errors.group ? (<span className="text-end" style={{ color: RED, fontSize: 14 }}>{formik.errors.group}</span>) : null}

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