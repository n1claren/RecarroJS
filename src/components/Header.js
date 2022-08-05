const Header = () => {
    return (
        <header className="header">
            <h1>
                <p>Recarro</p>
            </h1>

            <nav>
                <a href="#">All Cars</a>
                <div id="user">
                    <a href="#">List a car</a>
                    <a href="#">Logout</a>
                </div>
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;