import "../scss/forms.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { FormAlert } from "../FormAlert/FormAlert"

export const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        fullName: ""
    })

    const { signUp } = useAuth()
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
            await signUp(user.email, user.password, user.fullName)
            setUser({
                email: e.target.email
            })
            navigate('/')
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
                        <h3>Ingresa tus datos para crear tu usuario</h3>
                        <hr />
                    </div>
                    <div className="input-container">
                        <label className="label" htmlFor="fullName">Nombre y Apellido</label>
                        <input
                            type="text"
                            className="input-text"
                            placeholder="John Doe"
                            onChange={handleInputChange}
                            name="fullName"
                            value={user.fullName}
                            required
                        />
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
                        <div></div>
                        <button className="formButton formButton-register" type="submit">Registrame</button>
                    </div>
                </form>
                <div className="callback-container">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link className="callback" to={"/login"}>Iniciar sesión</Link>
                </div>
            </div>
        </div>
    )
}