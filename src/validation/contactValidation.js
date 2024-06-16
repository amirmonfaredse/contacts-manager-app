import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خانوادگی الزامی است'),
    // image: Yup.mixed().test('fileFormat', 'این فرمت پشتیبانی نمیشود', value => value && ['jpg'].includes(value.type)),
    phoneNumber: Yup.number().required('شماره تلفن الزامی است'),
    email: Yup.string().email('آدرس ایمیل معتبر نیست').required('ایمیل الزامی است'),
    profession: Yup.string().required('شغل الزامی است'),
    group: Yup.string().required('انتخاب گروه الزامی است')
})