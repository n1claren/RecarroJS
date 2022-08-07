import { Link } from "react-router-dom";

const CarCard = ({  
    _id,
    make,
    model,
    year,
    price,
    imageUrl
}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imageUrl} alt="car" />
            <div className="card-body">
                <h5 className="card-title">{year} {make} {model}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/AllCars/${_id}`} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}

export default CarCard;