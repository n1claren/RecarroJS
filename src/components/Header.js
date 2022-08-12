import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <header className="header">
            <h1>
                <p>
                    <Link to="/">
                        Recarro®
                    </Link>
                </p>
            </h1>

            <nav>
                {
                    user.email ?
                        <>
                            <span>Welcome, {user.email.split('@')[0]}.</span>

                            <Link to="AllCars">
                                All Cars
                            </Link>

                            <Link to="ListCar">
                                List a car
                            </Link>

                            <Link to="Logout">
                                Logout
                            </Link>
                        </>
                        :
                        <>
                            <Link to="Login">
                                Login
                            </Link>

                            <Link to="Register">
                                Register
                            </Link>
                        </>
                }
            </nav>
        </header>
    );
}

export default Header;