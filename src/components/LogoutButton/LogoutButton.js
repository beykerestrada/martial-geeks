import './logoutButton.scss'
import { FaSignOutAlt } from "react-icons/fa"
import { useAuth } from "../../context/AuthContext";


export const LogoutButton = () => {
    const { user } = useAuth()
    const { logout } = useAuth()
    return (
        <div className={`logoutButton-container ${user ? 'logoutButton-container-active' : ''}`}>
            <acronym title="Cerrar sesión">
                <button className="logoutButton" onClick={() => logout()}>
                    <FaSignOutAlt className='logOut' />
                </button>
            </acronym>
        </div>
    )
}