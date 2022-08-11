import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import * as carService from "./services/carService";
import { AuthContext } from "./contexts/AuthContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import ListCar from "./components/ListCar";
import AllCars from './components/AllCars.js';
import CarDetails from './components/CarDetails';

function App() {
    const [cars, setCars] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        carService.getAll()
            .then(result => {;
                setCars(result);
            });

    }, []);

    const userLoginHandler = (authData) => {
        setUser(authData);
    }

    return (
        <AuthContext.Provider value={{user, userLoginHandler}}>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<Homepage cars={cars} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/ListCar" element={<ListCar />} />
                    <Route path="/AllCars" element={<AllCars cars={cars} />} />
                    <Route path="/AllCars/:carId" element={<CarDetails cars={cars} />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;