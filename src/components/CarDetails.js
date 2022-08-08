import { useParams } from 'react-router-dom';

const CarDetails = ({ cars }) => {
    const { carId } = useParams();
    const car = cars.find(x => x._id === carId);

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-img-top" src={car.imageUrl} alt="car" />
                <div className="card-body">
                    <h5 className="card-title">{car.year} {car.make} {car.model}</h5>
                    <p className="card-text">Price: {car.price}</p>
                    <p className="card-text">Engine: {car.engine}</p>
                    <p className="card-text">Seller contact phone: {car.phone}</p>
                    <p className="card-text">Description: {car.description}</p>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;