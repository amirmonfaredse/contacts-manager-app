
import { CURRENTLINE, GREEN } from "../../helpers/colors";
import { Suspense, useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import {
    Spinner,
    VectorImgForForms,
    OriginalForm,
} from "../index";
import { Helmet } from "react-helmet-async";
import useSubmitContactHandlers from "../../hooks/useContactsHandlers";

const AddContact = () => {
    const { groups } = useContext(ContactContext);
    const { onSubmitForm } = useSubmitContactHandlers();
    return (
        <>
            <Helmet>
                <title>اضافه کردن مخاطب</title>
            </Helmet>
            <Suspense fallback={<Spinner />}>
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
                                        <OriginalForm onSubmitForm={onSubmitForm} groups={groups} />
                                    </div>
                                    <VectorImgForForms />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default AddContact;