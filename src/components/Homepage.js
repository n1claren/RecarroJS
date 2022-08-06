import CarCard from "./CarCard";

const Homepage = () => {
    return (
        <section id="welcome-world">
            <div className="welcome-panel">
                <div className="welcome-message">
                    <h2>Sell your car fast</h2>
                    <img src="./images/golf.png" alt="car" />
                    <h3>Buy a new one even faster</h3>
                    <img src="./images/pngwing.com.png" alt="car" />
                </div>

            </div>

            <div id="home-page">
                <h1>Last added cars</h1>

                {/* Generate 3 cars from server later on */}
                <div className="last-cards">
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>

                {/* Display paragraph: If there is no cars  */}
                <p className="no-articles">No cars yet</p>
            </div>
        </section>
    );
}

export default Homepage;