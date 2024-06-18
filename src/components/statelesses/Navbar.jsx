
import { useLocation } from "react-router-dom";
import { FOREGROUND, PURPLE } from "../../helpers/colors"
import { SearchContact } from "../index"
import { FaAddressBook } from "react-icons/fa6";

const Navbar = () => {
    const location = useLocation()
    return (
        <header className="App-header">
            <nav className="navbar navbar-dark navbar-expand-sm shadow-lg ">
                <div className="container justify-content-center">
                    <div className="row w-75">
                        <div className="col-sm-12 col-md-6  my-2 " style={{ color: FOREGROUND, fontSize: '20px' }}>
                            <FaAddressBook style={{ color: PURPLE, fontSize: '22px' }} />
                            {'  '}وب اپلیکیشن مدیریت{'  '}
                            <span style={{ color: PURPLE }}>مخاطبین</span>
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                            {
                                location.pathname === "/contacts" ? (
                                    <SearchContact />
                                ) : null
                            }

                        </div>

                    </div>
                </div>
            </nav>
        </header>

    )
}
export default Navbar