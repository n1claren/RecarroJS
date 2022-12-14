import CarCard from "./CarCard";

const AllCars = ({ cars }) => {
    const reversedCars = [
        ...cars
    ];

    reversedCars.reverse();

    return (
        <div className="all-cars">
            <h1>All Cars:</h1>
            <div className="all-cars-container">
                {cars.length > 0
                    ? reversedCars.map(x => <CarCard key={x._id} car={x} />)
                    : <p className="no-articles">There are no cars in the system.</p>
                }
            </div>
        </div>

    );
}

export default AllCars;