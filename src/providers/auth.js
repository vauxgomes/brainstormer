import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (propos) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        showForm,
        setShowForm
      }}
    >
      {propos.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
