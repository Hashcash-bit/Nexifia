import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// AuthContext provider component
export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// I'll figure out the logistics once all features are funtional