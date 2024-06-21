import { BACKGROUND, ORANGE } from '../../helpers/colors';
import ErrorMainLayout from './ErrorMainLayout';

const ErrorUnknownProblem = ({ error, resetErrorBoundary }) => {
    return (
        <ErrorMainLayout>
            <img className='img-fluid' src={require('../../assets/images/error-ghost.png')} alt="Error PNG" />
            <p className="h4 mt-3" style={{ color: BACKGROUND }}>
                مشکلی پیش آمده است ...
            </p>
            <pre>{error.message}</pre>
            <button className='btn' style={{ backgroundColor: ORANGE }} onClick={resetErrorBoundary}>تلاش مجدد</button>
        </ErrorMainLayout>
    )
}
export default ErrorUnknownProblem;   