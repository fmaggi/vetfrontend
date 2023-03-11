import { useState } from "react"
import { useOutletContext } from "react-router-dom";

interface AuthContextType {
    user: any,
    // token: string,
    signin: (user: any, callback: VoidFunction) => void,
    signout: (callback: VoidFunction) => void
}

export function useAuthContext() {
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

    return value;
}

export function useAuth() {
    return useOutletContext<AuthContextType>();
}

