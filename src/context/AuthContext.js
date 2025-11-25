'use client';

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 1. COMEÇA DESLOGADO (null)
  // Se quiser testar logado, mude para: { name: "Admin", email: "admin@street.com" }
  const [user, setUser] = useState(null);

  const login = (email) => {
    // Simula o login preenchendo o usuário
    setUser({ name: "Street Member", email });
  };

  const logout = () => {
    // Volta para nulo (Deslogado)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user // Converte o objeto usuário em true/false
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}