import CarCard from "./CarCard";

const Homepage = ({ cars }) => {

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

                <div className="car-container">
                    {cars.length > 0
                        ? cars.map(x => <CarCard key={x._id} car={x} />)
                        : <p className="no-articles">No cars yet</p>
                    }
                </div>
            </div>
        </section>
    );
}

export default Homepage;