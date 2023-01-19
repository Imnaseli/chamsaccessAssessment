import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from "./firebase"
import {createUserWithEmailAndPassword , signOut ,signInWithEmailAndPassword, sendPasswordResetEmail} from  "firebase/auth"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function createuser(email, password) {
    return createUserWithEmailAndPassword(auth , email, password)
  }

  function signinuser(email, password) {
    return signInWithEmailAndPassword(auth , email, password)
  }

  function logout() {
    return signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth , email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signinuser,
    createuser,
    logout,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
