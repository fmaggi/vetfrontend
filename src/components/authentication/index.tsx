import { createContext, ReactNode, useContext, useState } from "react"

interface AuthContextType {
    user: any,
    // token: string,
    signin: (user: any, callback: VoidFunction) => void,
    signout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);

    const signin = (user: any, callback: VoidFunction) => {
        setUser(user);
        callback();
    }

    const signout = (callback: VoidFunction) => {
        setUser(null);
        callback();
    }

    const value = {
        user: user,
        signin: signin,
        signout: signout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}

