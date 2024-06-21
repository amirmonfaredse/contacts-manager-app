import { COMMENT } from "../../helpers/colors";

const ErrorMainLayout = ({ children }) => {
    return (
        <div className="text-center py-5 m-4 rounded-3 h-100" style={{ backgroundColor: COMMENT }}>
            {children}
        </div>
    )
}
export default ErrorMainLayout;