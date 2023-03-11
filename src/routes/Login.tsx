import { FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../components/authentication";

export default function Login() {
    const { user, signin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    if (user) {
        return <Navigate to={from} replace />
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        console.log(username, password);

        /* hit the server for a login */

        signin({ user: username }, () => navigate(from, { replace: true }));
    }


    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>
                <label>
                    Password: <input name='password' type='password' />
                </label>{' '}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

