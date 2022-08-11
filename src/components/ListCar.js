const CreateCar = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();

        const carData = Object.fromEntries(new FormData(ev.target));

        console.log(carData);
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>List a Car</h1>
                    <label htmlFor="make">Make:</label>
                    <input
                        type="text"
                        id="make"
                        name="make"
                        placeholder="Your car manufacturer..."
                    />
                    <label htmlFor="model">Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Your car model..."
                    />
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="Your car year..."
                    />
                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        placeholder="Your car engine..."
                    />
                    <label htmlFor="car-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Your car image..."
                    />
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Your car price..."
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+359XXXXXXXXX"
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="List Car" />
                </div>
            </form>
        </section>
    );
}

export default CreateCar;