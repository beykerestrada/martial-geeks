import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { auth } from "../firebase/config";
import { Navigate } from "react-router-dom";

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
                return setUser(user);
            })
            .catch((error) => console.log(error))
    }


    const login = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setUser(user);
        return user;
    }

    const logout = () => {
        signOut(auth)
        .then(() => setUser(null))
            .then(() => <Navigate to="/login" />)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return unsubscribe;
      }, []);

    return (

        <AuthContext.Provider value={{ signUp, login, user, logout, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}