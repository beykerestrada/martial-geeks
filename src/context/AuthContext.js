import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext()
export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signUp = (email, password, displayName) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await updateProfile(user, { displayName: displayName });
            return setUser(true);
        })
        .catch((error) => console.log(error))
    }
        

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => { 
        signOut(auth)
        window.location.href = "/login";
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        })
    },[])

    return (
        <AuthContext.Provider value={{ signUp, login, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}