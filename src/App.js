import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as carService from "./services/carService";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import ListCar from "./components/ListCar";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                console.log(result);
                setCars(result);
                console.log(cars);
            });

    }, []);

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Homepage cars={cars} />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ListCar" element={<ListCar />} />
            </Routes>
            
            <Footer />
        </div>
    );
}

export default App;