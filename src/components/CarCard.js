import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={car.imageUrl} alt="car" />
            <div className="card-body">
                <h5 className="card-title">{car.year} {car.make} {car.model}</h5>
                <p className="card-text">{car.price}</p>
                <Link to={`/AllCars/${car._id}`} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}

export default CarCard;