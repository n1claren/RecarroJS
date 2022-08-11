import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';

const EditCar = ({editCarHandler}) => {
    const [currentCar, setCurrentCar] = useState({});
    const { carId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        carService.getOne(carId)
            .then(carData => {
                setCurrentCar(carData);
            });
    }, []);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const carData = Object.fromEntries(new FormData(ev.target));

        carService.edit(carId, carData)
            .then(result => {
                editCarHandler(carId, result);
                navigate(`/AllCars/${carId}`);
            });
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Car</h1>
                    <label htmlFor="make">Make:</label>
                    <input type="text" id="make" name="make" defaultValue={currentCar.make} />
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" defaultValue={currentCar.model} />
                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" defaultValue={currentCar.year} />
                    <label htmlFor="engine">Engine:</label>
                    <input type="text" id="engine" name="engine" defaultValue={currentCar.engine} />
                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentCar.imageUrl} />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={currentCar.price} />
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" defaultValue={currentCar.phone} />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue={currentCar.description} />
                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    );
}

export default EditCar;