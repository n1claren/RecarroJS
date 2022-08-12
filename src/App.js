import { Routes, Route } from 'react-router-dom';
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
import DeleteCar from './components/DeleteCar';
import MyCars from './components/MyCars';

function App() {
    const [cars, setCars] = useState([]);
    const [user, setUser] = useLocalStorage('auth', {});

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

    const deleteCarHandler = (carId) => {
        setCars(state => state.filter(x => x._id !== carId));
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
                    <Route path="/ListCar" element={user.email ? <ListCar listCarHandler={listCarHandler} /> : <Login />} />
                    <Route path="/AllCars" element={user.email ? <AllCars cars={cars} /> : <Login />} />
                    <Route path="/MyCars" element={user.email ? <MyCars cars={cars} /> : <Login />} />
                    <Route path="/AllCars/:carId" element={user.email ? <CarDetails cars={cars} /> : <Login />} />
                    <Route path="/AllCars/:carId/Edit" element={user.email ? <EditCar editCarHandler={editCarHandler} /> : <Login />} />
                    <Route path="/AllCars/:carId/Delete" element={user.email ? <DeleteCar deleteCarHandler={deleteCarHandler} cars={cars} /> : <Login />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;