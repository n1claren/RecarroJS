import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';

const ListCar = ({ listCarHandler }) => {
    const [error, setError] = useState({
        makeModelEnginePrice: '', 
        year: '', 
        phone: '', 
        image: '', 
        description: ''
    });

    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault();

        const carData = Object.fromEntries(new FormData(ev.target));

        carService.list(carData)
            .then(result => {
                listCarHandler(result);
                navigate("/");
            });
    };

    const validateMakeModelEnginePrice = (ev) => {
        const makeModelEnginePrice = ev.target.value;
        let errorMessage = '';

        if (makeModelEnginePrice.length < 3) {
            errorMessage = 'Make / Model / Engine / Price must be longer than 3 characters';
        } else if (makeModelEnginePrice.length > 20) {
            errorMessage = 'Make / Model / Engine / Price must be shorter than 20 characters';
        }

        setError(state => ({
            ...state,
            makeModelEnginePrice: errorMessage,
        }));
    }

    const validateYear = (ev) => {
        const year = ev.target.value;
        let errorMessage = '';

        if (year < 1900) {
            errorMessage = 'Invalid year.';
        } else if (year > new Date().getFullYear()) {
            errorMessage = 'Your car can`t be created in the future.';
        }

        setError(state => ({
            ...state,
            year: errorMessage,
        }));
    }

    const validateImageUrl = (ev) => {
        const image = ev.target.value;
        let errorMessage = '';

        if (!isImage(image)) {
            errorMessage = "Please enter a valid image url.";
        }   

        setError(state => ({
            ...state,
            image: errorMessage,
        }));
    }

    const validatePhoneNumber = (ev) => {
        const phone = ev.target.value;
        let errorMessage = '';

        if (phone.length !== 13 && phone.length !== 10) {
            errorMessage = "Please enter a valid Bulgarian mobile phone number.";
        }
        
        setError(state => ({
            ...state,
            phone: errorMessage,
        }));
    }

    const validateDescription = (ev) => {
        const description = ev.target.value;
        let errorMessage = '';

        if (description.length > 300) {
            errorMessage = "Your description should be under 300 symbols.";
        }   

        setError(state => ({
            ...state,
            description: errorMessage,
        }));
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>List a Car</h1>
                    {error.makeModelEnginePrice &&
                        <div style={{ color: 'red' }}>{error.makeModelEnginePrice}</div>
                    }
                    {error.year &&
                        <div style={{ color: 'red' }}>{error.year}</div>
                    }
                    {error.image &&
                        <div style={{ color: 'red' }}>{error.image}</div>
                    }
                    {error.phone &&
                        <div style={{ color: 'red' }}>{error.phone}</div>
                    }
                    {error.description &&
                        <div style={{ color: 'red' }}>{error.description}</div>
                    }
                    <label htmlFor="make">Make:</label>
                    <input
                        type="text"
                        id="make"
                        name="make"
                        placeholder="Your car manufacturer..."
                        onBlur={validateMakeModelEnginePrice}
                    />
                    <label htmlFor="model">Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Your car model..."
                        onBlur={validateMakeModelEnginePrice}
                    />
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="Your car year..."
                        onBlur={validateYear}
                    />
                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        placeholder="Your car engine..."
                        onBlur={validateMakeModelEnginePrice}
                    />
                    <label htmlFor="car-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Your car image..."
                        onBlur={validateImageUrl}
                    />
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Your car price..."
                        onBlur={validateMakeModelEnginePrice}
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+359XXXXXXXXX"
                        onBlur={validatePhoneNumber}
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" onBlur={validateDescription}></textarea>
                    <input className={
                        error.makeModelEnginePrice === '' &&
                        error.year === '' &&
                        error.phone === '' && 
                        error.image === '' && 
                        error.description === '' 
                        ? 'btn submit' : 'disabled'} 
                        type="submit" value="List Car" /> 
                </div>
            </form>
        </section>
    );
}

function isImage(url) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export default ListCar;