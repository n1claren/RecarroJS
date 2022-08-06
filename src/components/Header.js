import { Link } from "react-router-dom";

const Header = () => {
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
                <Link to="AllCars">
                    All Cars
                </Link>

                <Link to="ListCar">
                    List a car
                </Link>

                <Link to="Logout">
                    Logout
                </Link>

                <Link to="Login">
                    Login
                </Link>

                <Link to="Register">
                    Register
                </Link>
            </nav>
        </header>
    );
}

export default Header;