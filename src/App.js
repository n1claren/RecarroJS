import { Routes, Route, useNavigate} from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import ListCar from "./components/ListCar";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ListCar" element={<ListCar />} />
            </Routes>
            
            <Footer />
        </div>
    );
}

export default App;