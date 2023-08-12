import { FaUserAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

export const LoginOrSignupButton = () => {
    const { user } = useAuth()
    
    return (
        <div className={"logoutButton-container logoutButton-container-active"}>
            <acronym className={"acronimo"} title={user ? "Ir al perfil" : "Ingreso / Registro"}>
                <Link to={user ? "/cuenta" : "/login"} className="logoutButton userIcon-container"onClick={()=>{}} >
                    <FaUserAlt className={`logOut user`} />
                    <p className="user__p">{!user ? "Ingresar" : "Compras"}</p>
                </Link>
                
            </acronym>

        </div>
    )

}
