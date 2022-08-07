const EditCar = () => {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">
                    <h1>Edit Car</h1>
                    <label htmlFor="make">Make:</label>
                    <input type="text" id="make" name="make" value="" />
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" value="" />
                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" value="" />
                    <label htmlFor="engine">Engine:</label>
                    <input type="text" id="engine" name="engine" value="" />
                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value="" />
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" value="" />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value="" />
                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    );
}

export default EditCar;