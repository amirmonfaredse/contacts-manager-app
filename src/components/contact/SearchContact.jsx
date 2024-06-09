import { COMMENT, PURPLE } from "../../helpers/colors"
import { FaSearch } from "react-icons/fa";
const SearchContact = () => {
    return (
        <div className="col d-flex input-group  mx-2 w-50" dir="ltr">
            <span className="input-group-text " id="basic-addon1" style={{ background: PURPLE }}>
                <FaSearch />
            </span>
            <input type="text" className="form-control" dir="rtl"
                style={{ background: COMMENT, borderColor: PURPLE }}
                placeholder="جستجو مخاطب..."
                aria-label="Search"
                aria-describedby="basic-addon1" />


        </div>
    )
}
export default SearchContact