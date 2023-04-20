import { useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';
import './logoutButton.scss';



export const LogoutButton = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const isLoggedOut = useRef(false);

    const handleLogout = async () => {
        await logout();
        isLoggedOut.current = true;
        navigate('/login', { replace: true });

    };

    return (
        <div className={`logoutButton-container ${user ? 'logoutButton-container-active' : ''}`}>
            <acronym title="Cerrar sesión">
                <button className="logoutButton" onClick={handleLogout}>
                    <FaSignOutAlt className="logOut" />
                </button>
            </acronym>
        </div>
    );
};