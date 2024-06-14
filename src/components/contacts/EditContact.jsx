import { BACKGROUND, COMMENT, CURRENTLINE, GREEN, PURPLE, } from "../../helpers/colors";


const EditContact = () => {
    return (
        <div className="container" >
            <div className="grid">
                <div className="row my-5 text-center">
                    <div className="col rounded" >
                        <h3 className="h3" style={{ color: GREEN }}>
                            ویرایش مخاطب
                        </h3>
                        <form className="m-5 p-4 d-flex justify-content-start flex-column" style={{ backgroundColor: CURRENTLINE }}>
                            <input type="text" name="" id="" placeholder="نام و نام خانوادگی ..." className="form-control w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }} />
                            <input type="number" name="" id="" placeholder="شماره تماس ..." className="form-control w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }} />
                            <input type="email" name="" id="" placeholder="ادرس ایمیل ..." className="form-control w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }} />
                            <input type="text" name="" id="" placeholder="شغل ..." className="form-control w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }} />
                            <select className="form-select w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }}>
                                <option value="" selected>انتخاب گروه</option>
                            </select>
                            <input type="file" name="" id="" placeholder="ادرس ایمیل ..." className="form-control w-50 my-2" style={{ backgroundColor: BACKGROUND, borderColor: PURPLE, color: PURPLE }} />
                            <div className=" w-50 my-2 ">
                                <input type="submit" className="btn mx-2 mt-3" value='ویرایش مخاطب' style={{ backgroundColor: PURPLE }} />
                                <button className="btn mx-2 mt-3" style={{ backgroundColor: COMMENT }}>انصراف</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditContact;