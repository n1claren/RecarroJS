const EditCar = () => {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">
                    <h1>Edit Car</h1>
                    <label htmlFor="make">Make:</label>
                    <input type="text" id="make" name="make" defaultValue="" />
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" defaultValue="" />
                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" defaultValue="" />
                    <label htmlFor="engine">Engine:</label>
                    <input type="text" id="engine" name="engine" defaultValue="" />
                    <label htmlFor="car-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue={""} />
                    <input className="btn submit" type="submit" value="Edit Car" />
                </div>
            </form>
        </section>
    );
}

export default EditCar;