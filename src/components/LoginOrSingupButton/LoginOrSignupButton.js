import { FaUserAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

export const LoginOrSignupButton = () => {
    const { user } = useAuth()
    return (
        <div className={"logoutButton-container logoutButton-container-active"}>
            <acronym className={"acronimo"} title={user ? "Ir al perfil" : "Ingreso / Registro"}>
                <Link to={user ? "/" : "/login"} className="logoutButton" >
                    <FaUserAlt className={`logOut user`} />
                </Link>
            </acronym>

        </div>
    )

}
