import { useContext } from "react";

import CarCard from "./CarCard";

import { AuthContext } from "../contexts/AuthContext";


const MyCars = ({ cars }) => {
    const { user } = useContext(AuthContext);

    const userCars = cars.filter(x => x._ownerId === user._id);

    return (
        <div className="all-cars">
            <h1>Your Cars:</h1>
            <div className="all-cars-container">
                {cars.length > 0 ? userCars.map(x => <CarCard key={x._id} car={x} />) : <p className="no-arti cles">You have no listed cars in our system.</p>}
            </div>
        </div>

    );
}

export default MyCars;