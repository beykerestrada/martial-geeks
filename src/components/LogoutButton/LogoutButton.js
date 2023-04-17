import './logoutButton.scss'
import { MdOutlineLogout } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";


export const LogoutButton = () => {
    const { user } = useAuth()
    const { logout } = useAuth()
    return (
        <div className={`logoutButton-container ${user ? 'logoutButton-container-active' : ''}`}>
            <acronym title="Cerrar sesión">
                <button className="logoutButton" onClick={() => logout()}>
                    <MdOutlineLogout className='logOut' />
                </button>
            </acronym>
        </div>
    )
}