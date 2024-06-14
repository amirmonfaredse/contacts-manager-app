import { BACKGROUND, FOREGROUND, PURPLE } from "../../helpers/colors"
import { FaSearch } from "react-icons/fa";
const SearchContact = () => {
    return (
        <div className="col d-flex input-group  mx-2 mt-2 " dir="ltr">
            <span className="input-group-text " id="basic-addon1" style={{ background: PURPLE, borderColor: PURPLE }}>
                <FaSearch />
            </span>
            <input type="text" className="form-control " dir="rtl"
                style={{ background: BACKGROUND, borderColor: PURPLE, color: FOREGROUND }}
                placeholder="جستجو مخاطب..."
                aria-label="Search"
                aria-describedby="basic-addon1" />
        </div>
    )
}
export default SearchContact