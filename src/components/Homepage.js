const Homepage = () => {
    return (
        <section id="welcome-world">
            <div className="welcome-panel">
                <div className="welcome-message">
                    <h2>Sell your car fast</h2>
                    <h3>Buy a new one even faster</h3>
                </div>
                <img src="./images/pngwing.com.png" alt="car" />
            </div>

            <div id="home-page">
                <h1>Last added cars</h1>
                {/* Display div: with information about every car (if any) */}
                <div className="car">
                    <div className="image-wrap">
                        <img src="./images/chiron.png" />
                    </div>
                    <h3>Bugatti Chiron</h3>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">
                            Details
                        </a>
                    </div>
                </div>

                {/* Display paragraph: If there is no cars  */}
                <p className="no-articles">No cars yet</p>
            </div>
        </section>
    );
}

export default Homepage;