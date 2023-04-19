import "../scss/forms.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import {  Link } from "react-router-dom"
import { FormAlert } from "../FormAlert/FormAlert"

export const ResetPassword = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { resetPassword } = useAuth()
    const [error, setError] = useState()
    const handleInputChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            resetPassword(user.email)
            setError('Si tu correo existe en nuestras bases de datos, recibiras un mensaje con las instrucciones para recuperar la contraseña')
        } catch (error) {
            setError(error.message)
        }
    }

    return (

        <div>
            <div className="form-container">
                {error && <FormAlert message={error} />}
                <form onSubmit={handleSubmit} className="form">
                    <div className="formTitle">
                        <h3>Ingresa tu correo para recuperar tu contraseña</h3>
                        <hr />
                    </div>
                    <div className="input-container">
                        <label className="label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="input-text"
                            placeholder="email@dominio.com"
                            onChange={handleInputChange}
                            name="email"
                            required
                        />
                    </div>

                    <div className="formButton-container">
                        <div></div>
                        <button className="formButton" type="submit">Recuperar contraseña</button>
                    </div>
                </form>
                <div className="callback-container">
                    <p>¿Recordaste tu contraseña?</p>
                    <Link className="callback" to={"/login"}>Iniciar sesión</Link>
                </div>
            </div>

        </div>
    )
}