import { TiPlus } from 'react-icons/ti';
import { PINK } from '../../helpers/colors';
import { Link } from 'react-router-dom';

const BtnAddContact = () => {
    return (
        <div className="grid">
            <div className="row">
                <div className="col my-4 d-flex justify-content-start">
                    <p className="h3">
                        <Link to={"/contacts/add"} className="btn mx-2" style={{ backgroundColor: PINK }}>
                            <TiPlus className='ms-2 fs-4' />
                            ساخت مخاطب جدید
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BtnAddContact;