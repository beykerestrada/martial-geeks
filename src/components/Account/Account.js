import { useAuth } from "../../context/AuthContext"


export const Account = () => {
    const {user} = useAuth()

    return (

        <div className="section-container">
            <h2 className="section-container__title">Panel de usuario</h2>
            <hr />
            <h3>En linea como: {user.displayName}</h3>
        </div>

    )
}