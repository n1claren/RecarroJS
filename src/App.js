import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import * as carService from "./services/carService";
import { AuthContext } from "./contexts/AuthContext";
import { useLocalStorage } from './hooks/useLocalStorage';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import ListCar from "./components/ListCar";
import AllCars from './components/AllCars.js';
import CarDetails from './components/CarDetails';
import Logout from './components/Logout';
import EditCar from './components/EditCar';

function App() {
    const [cars, setCars] = useState([]);
    const [user, setUser] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            });
    }, []);

    const userLoginHandler = (authData) => {
        setUser(authData);
    }

    const userLogoutHandler = () => {
        setUser({});
    }

    const listCarHandler = (carData) => {
        setCars(state => [
            ...state,
            carData
        ]);
    }

    const editCarHandler = (carId, carData) => {
        setCars(state => state.map(x => x._id === carId ? carData : x));
    }

    return (
        <AuthContext.Provider value={{user, userLoginHandler, userLogoutHandler}}>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={<Homepage cars={cars} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Logout" element={<Logout />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/ListCar" element={<ListCar listCarHandler={listCarHandler} />} />
                    <Route path="/AllCars" element={<AllCars cars={cars} />} />
                    <Route path="/AllCars/:carId" element={<CarDetails cars={cars} />} />
                    <Route path="/AllCars/:carId/Edit" element={<EditCar editCarHandler={editCarHandler} />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;