import { Link } from "react-router-dom";
import { COMMENT, ORANGE, RED } from "../../helpers/colors";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from '../../validation/contactValidation'
import { useEffect, useRef } from "react";
const OriginalForm = ({ onSubmitForm, groups, contact }) => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const initialValues = contact || {
        fullName: '',
        image: '',
        phoneNumber: '',
        profession: '',
        email: '',
        group: '',
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                    onSubmitForm(values)
                }}
                enableReinitialize
            >
                <Form
                    className="m-2 p-4 d-flex justify-content-start flex-column"
                >
                    <Field type="text"
                        name="fullName"
                        placeholder="نام و نام خانوادگی ..."
                        className="form-control inp-main my-2"
                        innerRef={inputRef}
                    />
                    <ErrorMessage name="fullName" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />
                    <Field type="number"
                        name="phoneNumber"
                        placeholder="شماره تماس ..."
                        className="form-control inp-main my-2"
                    />
                    <ErrorMessage name="phoneNumber" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />
                    <Field type="email"
                        name="email"
                        placeholder="ادرس ایمیل ..."
                        className="form-control inp-main my-2"
                    />
                    <ErrorMessage name="email" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />

                    <Field type="text"
                        name="profession"
                        placeholder="شغل ..."
                        className="form-control inp-main my-2"
                    />
                    <ErrorMessage name="profession" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />

                    <Field type="text"
                        name="image"
                        placeholder="ادرس تصویر ..."
                        className="form-control inp-main my-2"
                    />
                    <ErrorMessage name="image" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />

                    <Field className="form-select inp-main my-2"
                        name="group"
                        as="select">
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 && groups.map((g) => <option key={g.id}
                            value={g.id}>{g.name}</option>)}
                    </Field>
                    <ErrorMessage name="group" render={msg => (
                        <span className="text-end" style={{ color: RED, fontSize: 14 }}>{msg}</span>
                    )} />
                    <div className=" w-100 my-2 ">
                        <input type="submit"
                            className="btn mx-2 mt-3 p-2 px-5"
                            value={contact ? 'ویرایش مخاطب' : 'ساخت مخاطب'}
                            style={{ backgroundColor: ORANGE, fontSize: 18 }} />
                        <Link to={"/contacts"}
                            className="btn mx-2 mt-3 p-2 px-4"
                            style={{ backgroundColor: COMMENT, fontSize: 18 }}
                        >انصراف</Link>
                    </div>
                </Form>

            </Formik>
        </>
    )
}
export default OriginalForm;