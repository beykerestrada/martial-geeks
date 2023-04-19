import "../scss/forms.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { FormAlert } from "../FormAlert/FormAlert"

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })



    const { login } = useAuth()
    const navigate = useNavigate()
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
            const token = await login(user.email, user.password)
            sessionStorage.setItem('token', token)
            login(user.email, user.password)
            navigate('/cuenta')
        } catch (error) {
            setError(error.message)
        }
    }

    return (

        <div>
            <div className="form-container">
            {error && <FormAlert message={error}/>}
                <form onSubmit={handleSubmit} className="form">
                    <div className="formTitle">
                        <h3>Ingresa tus datos de acceso</h3>
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
                    <div className="input-container">
                        <label className="label" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="input-text"
                            placeholder="******"
                            onChange={handleInputChange}
                            name="password"
                            required
                        />
                    </div>
                    <div className="formButton-container">
                        <Link className=" formButton-naked" to={"/reset-password"}>Olvidé mi contraseña</Link>
                        <button className="formButton" type="submit">Iniciar sesión</button>
                    </div>
                </form>
                <div className="callback-container">
                    <p>¿No tienes una cuenta?</p>
                    <Link className="callback" to={"/register"}>Registrarme</Link>
                </div>
            </div>

        </div>
    )
}