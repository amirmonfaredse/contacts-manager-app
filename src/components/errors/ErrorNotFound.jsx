const { ORANGE } = require('../../helpers/colors')
const { default: ErrorMainLayout } = require('./ErrorMainLayout')

const ErrorNotFound = () => {
    return (
        <ErrorMainLayout>
            <img className='w-25 img-fluid ' src={require('../../assets/gifs/Connection Error.gif')} alt="پیدانشد" />
            <p className="h3 mt-3 " style={{ color: ORANGE }}>
                مخاطب یافت نشد ...
            </p>
        </ErrorMainLayout>
    )
}
export default ErrorNotFound;