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

    const [inputError, setInputError] = useState()
    const validateForm = () => {
        let inputErrors = {}
        let isValid = true

        if (!user.email) {
            inputErrors.email = 'Email requerido'
            isValid = false
        }

        if (!user.password) {
            inputErrors.password = 'Contraseña requerida'
            isValid = false
        }

        if (user.password && user.password.length < 6) {
            inputErrors.password = 'La contraseña debe tener al menos 6 caracteres'
            isValid = false
        }
        setInputError(inputErrors)
        return isValid
    }
  
    const inputErrorEmail = inputError && inputError.email
    const inputErrorPassword = inputError && inputError.password

    const handleSubmit = async (e) => {
        e.preventDefault()
        validateForm()

        try {
            const token = await login(user.email, user.password)
            sessionStorage.setItem('token', token)
            login(user.email, user.password)
            navigate('/cart')
        } catch (error) {
            console.log(error.code)

            setError(error.code)
        }
    }

    const DEFAULT_ERROR_MESSAGE = "Hay errores en el fomulario, por favor corrige los campos"

    const AUTH_ERROR_MESSAGE = {
        'auth/user-not-found': "Usuario o contraseña incorrectos",
        'auth/wrong-password': "Usuario o contraseña incorrectos",
        'auth/internal-error': DEFAULT_ERROR_MESSAGE,
        'auth/invalid-email' : DEFAULT_ERROR_MESSAGE
    }

    const errorMesage = AUTH_ERROR_MESSAGE[error]

    return (

        <div>
            <div className="form-container">
                {error && <FormAlert message={errorMesage} />}
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
                        />
                        {inputErrorEmail && <span className="errorMessage">{inputErrorEmail}</span>}
                    </div>
                    <div className="input-container">
                        <label className="label" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            className="input-text"
                            placeholder="******"
                            onChange={handleInputChange}
                            name="password"
                        />
                        {inputErrorPassword && <span className="errorMessage">{inputErrorPassword}</span>}

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