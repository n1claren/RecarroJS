import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';
import { AuthContext } from '../contexts/AuthContext';

const DeleteCar = ({ cars, deleteCarHandler }) => {
    const { carId } = useParams();
    const [car, setCar] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setCar(cars.find(x => x._id === carId));
    }, [carId]);

    const carBelongsToUser = car._ownerId === user._id;

    const onClick = (ev) => {
        ev.preventDefault();

        if (!carBelongsToUser) {
            return;
        }

        carService.deleteCar(carId);
        deleteCarHandler(carId);
        navigate("/");
    };

    return (
        <>
            <div className='delete-box'>
                <div className='delete-warning'>Are you sure you want to delete this car?</div>
                <Link to={`/AllCars/${carId}/Delete`} onClick={onClick} className="btn details-btn">Yes</Link>
                <Link to={"/"} className="btn details-btn">No</Link>
                <Link to={`/AllCars/${carId}/Edit`} className="btn details-btn">Edit it</Link>
            </div>
            <div className="card-container">
                <div className="card">
                    <img className="card-img-top" src={car.imageUrl} alt="car" />
                    <div className="card-body">
                        <h1 className="card-title">{car.year} {car.make} {car.model}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteCar;