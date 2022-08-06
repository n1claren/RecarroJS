import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <h1>Login</h1>
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