import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خانوادگی الزامی است'),
    image: Yup.string().url('آدرس معتبر نیست').required('تصویر مخاطب الزامی است'),
    phoneNumber: Yup.number().required('شماره تلفن الزامی است'),
    email: Yup.string().email('آدرس ایمیل معتبر نیست').required('ایمیل الزامی است'),
    profession: Yup.string().required('شغل الزامی است'),
    group: Yup.string().required('انتخاب گروه الزامی است')
})