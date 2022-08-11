import { Link } from 'react-router-dom';
import * as authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const onSubmit = (ev) => {
        ev.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(ev.target));

        authService.login(email, password)
            .then(authData => {
                if (authData.code === 403) {
                    setError(authData.message);
                    return;
                }
                userLoginHandler(authData);
                navigate("/");
            })
            .catch(() => {
                navigate("/Login");
            });
    };

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    {error.length > 0 ? <div className='error-div'>{error}</div> : ''}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="n1claren@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/Register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Login;