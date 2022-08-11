import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
 
import * as authService from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
    const { userLoginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                userLoginHandler(authData);
                navigate("/");
            });
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="n1claren@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/Login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Register;