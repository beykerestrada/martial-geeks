import "../scss/forms.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"


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
            navigate('/cart')
        } catch (error) {
            setError(error.message)
        }
    }

    return (

        <div>
            {error && <p>{error}</p>}
            <div className="form-container">
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
                    <button className="formButton" type="submit">Iniciar sesión</button>
                </form>
                <div className="callback-container">
                    <p>¿No tienes una cuenta?</p>
                    <Link className="callback" to={"/register"}>Registrarme</Link>
                </div>
            </div>

        </div>
    )
}