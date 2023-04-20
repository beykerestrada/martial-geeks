import "../scss/forms.scss"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { FormAlert } from "../FormAlert/FormAlert"
import { updateProfile } from "firebase/auth"

export const Register = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        fullName: ""
    })

    const { signUp } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const handleInputChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        const [inputError, setInputError] = useState()
        const validateForm = () => {
            let inputErrors = {}
            let isValid = true
            
            if (!user.fullName) {
                inputErrors.fullName = 'Nombre y apellido requeridos'
                isValid = false
            }
            if (!user.fullName.includes(" ")) {
                inputErrors.fullName = 'Debes escribir tu nombre y apellido separados por un espacio'
                isValid = false
            }

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
        const inputErrorFullname = inputError && inputError.fullName

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        validateForm()
        try {
            await signUp(user.email, user.password, user.fullName)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await updateProfile(user, { displayName: user.fullName });
                navigate("/cart")
                return setUser(user);
            })
        } catch (error) {
            console.log("este es el error =>   " + error)
            setError(error.code)
        }
    }
    
    const DEFAULT_ERROR_MESSAGE = "Hay errores en el fomulario, por favor corrige los campos"
    const AUTH_ERROR_MESSAGE = {
        'auth/weak-password': DEFAULT_ERROR_MESSAGE,
        'auth/email-already-in-use': "Ya existe un usuario asociado a este correo",
        'auth/invalid-email' : DEFAULT_ERROR_MESSAGE,
        'auth/internal-error' : DEFAULT_ERROR_MESSAGE
    }

    const errorMesage = AUTH_ERROR_MESSAGE[error] 

    return (

        <div>
            <div className="form-container">
                {error && <FormAlert message={errorMesage} />}
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
                        />
                        {inputErrorFullname && <span className="errorMessage">{inputErrorFullname}</span>}
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