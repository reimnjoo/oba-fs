import { createContext, useContext, useState, ReactNode } from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    login: (data: { email: string; password: string }) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
); // Export AuthContext

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const login = () => setIsAuthenticated(true);
    // TEMPORARY LOGIN TO TEST REACT HOOK FORM
    const login = (data: { email: string, password: string }) => {

        if(!data.email && !data.password) console.log("Login credentials required!");
        if(data.email === "aladiahfulminar1@gmail.com" && data.password === "123") {
            setIsAuthenticated(true);
            console.log("Successfully logged in.")
        } else {
            console.log("Invalid credentials.");
        }
    }

    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
