import { createContext, useContext, useState } from 'react';
import useLocalStorage from './useLocalStorage';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // TODO use this https://blog.logrocket.com/authentication-react-router-v6/
  // const [user, setUser] = useLocalStorage('user', 'null');
  // setUser(null);
  
  // setUser(data)
  const login = async () => {setIsAuthenticated(true);
    
  }
  const logout = () => setIsAuthenticated(false); // TODO use this

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
