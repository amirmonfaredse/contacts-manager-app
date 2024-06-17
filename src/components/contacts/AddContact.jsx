import { Link } from "react-router-dom";
import { COMMENT, CURRENTLINE, GREEN, ORANGE,  RED  } from "../../helpers/colors";
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import Spinner from "../Spinner";


// Form Validation 
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from '../../validation/contactValidation'
const AddContact = () => {
    const { loading, onSubmitForm, groups } = useContext(ContactContext);

    return (
        <>
            {loading ? <Spinner /> : (
                <div className="container" >
                    <div className="grid">
                        <div className="row  text-center">
                            <div className="col rounded" >
                                <h3 className="h3 p-3" style={{ color: GREEN }}>
                                    ساخت مخاطب جدید
                                </h3>
                                <div className="container d-flex" style={{ backgroundColor: CURRENTLINE, borderRadius: 10 }}
                                >
                                    <div className="col-12 col-sm-12 col-md-6 col-xl-6">
                                        <Formik
                                            initialValues={{
                                                fullName: '',
                                                image: '',
                                                phoneNumber: '',
                                                profession: '',
                                                email: '',
                                                group: '',

                                            }}
                                            validationSchema={contactSchema}
                                            onSubmit={(values) => {
                                                onSubmitForm(values)
                                            }}
                                        >
                                            <Form
                                                className="m-2 p-4 d-flex justify-content-start flex-column"
                                            >
                                                <Field type="text"
                                                    name="fullName"
                                                    placeholder="نام و نام خانوادگی ..."
                                                    className="form-control inp-main my-2"
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
                                                        value='ساخت مخاطب'
                                                        style={{ backgroundColor: ORANGE, fontSize: 18 }} />
                                                    <Link to={"/contacts"}
                                                        className="btn mx-2 mt-3 p-2 px-4"
                                                        style={{ backgroundColor: COMMENT, fontSize: 18 }}
                                                    >انصراف</Link>
                                                </div>
                                            </Form>

                                        </Formik>

                                    </div>
                                    <div className="col-0 col-sm-0 col-md-6 col-xl-6 d-flex justify-content-center flex-column me-5">
                                        <div style={{ width: '80%' }}>
                                            <img className="img-fluid" src={require('../../assets/images/Refer-a-Friend.png')} alt="" />
                                        </div>
                                    </div>

                                </div>
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