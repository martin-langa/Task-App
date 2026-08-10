import { createContext, useState, type ReactNode } from "react";

type Auth = {
    id: string,
    email: string,
    username: string,
    role: "ADMIN" | "USER"
}

type AuthContextType = {
    auth: Auth | null,
    setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [auth, setAuth] = useState<Auth | null>(null);
    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;