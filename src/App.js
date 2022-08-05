function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>
          <p>Recarro</p>
        </h1>

        <nav>
          <a href="#">All Cars</a>
          <div id="user">
            <a href="#">List a car</a>
            <a href="#">Logout</a>
          </div>
          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>

      {/*Home Page*/}
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>Sell your car fast</h2>
          <h3>Buy a new one even faster</h3>
        </div>
        <img src="./images/pngwing.com.png" alt="car" />
        <div id="home-page">
          <h1>Last added cars</h1>
          {/* Display div: with information about every car (if any) */}
          <div className="car">
            <div className="image-wrap">
              <img src="./images/chiron.png" />
            </div>
            <h3>Bugatti Chiron</h3>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">
                Details
              </a>
            </div>
          </div>

          {/* Display paragraph: If there is no cars  */}
          <p className="no-articles">No cars yet</p>
        </div>
      </section>
      {/* Login Page */}
      <section id="login-page" className="auth">
        <form id="login">
          <div className="container">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
            />
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
      {/* Register Page */}
      <section id="register-page" className="content auth">
        <form id="register">
          <div className="container">
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
            />
            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="register-password" />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password" />
            <input className="btn submit" type="submit" value="Register" />
            <p className="field">
              <span>
                If you already have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
      {/* Car Listing Page */}
      <section id="create-page" className="auth">
        <form id="create">
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
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description"></textarea>
            <input className="btn submit" type="submit" value="List Car" />
          </div>
        </form>
      </section>
      {/* Edit Page */}
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

      <footer className="footer">
        <p>© 2022 ReactJS SoftUni Course. Design by <a href="https://github.com/n1claren"> n1claren</a></p>
      </footer>
    </div>
  );
}

export default App;