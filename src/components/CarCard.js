const CarCard = () => {
    return (
        <div className="card">
            <img className="card-img-top" src="https://automedia.investor.bg/media/files/resized/uploadedfiles/640x0/bf4/764ac66980b216a8207ba2caf5302bf4-07-1.jpg" alt="car image" />
            <div className="card-body">
                <h5 className="card-title">2020 Lamborghini Huracan</h5>
                <p className="card-text">174,000$</p>
                <a href="#" className="btn details-btn">Details</a>
            </div>
        </div>
    );
}

export default CarCard;