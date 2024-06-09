import { PURPLE } from "../helpers/colors"
import SearchContact from "./contact/SearchContact"
import { FaAddressBook } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg ">
            <div className="container  justify-content-center w-100">
                <div className="row w-75">
                    <div className="col">
                        <FaAddressBook />
                        وب اپلیکیشن مدیریت{' '}
                        <span style={{ color: PURPLE }}>مخاطبین</span>
                    </div>
                    <SearchContact />
                </div>
            </div>
        </nav>
    )
}
export default Navbar