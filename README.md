# Using RecarroJS

This project was made for educational purposes on the ReactJS course at [SoftUni](https://softuni.bg).

## Functionality

On the landing page you can:

### `login` and `register`

as well as see the last three cars added to the server. There are 4 hardcoded cars (Lamborghini Huracan, Nissan GT-R, BMW M8 and an Audi R8). They belong to the hardcoded user peter@abv.bg with password '123456'. You must login to see any other content. There are no navs to any other pages, but if you try to access them via the URL, and you are not logged in, you will be redirected to the login page.

The `Recarro®` button sends you to the homepage.

Once you login you will see three new navs:

### `My Cars`

Here you can see all the cars you have listed for sale.

### `All Cars`

Here you can see all the cars listed for sale.

All the cars on both of those pages will have a `Details` button. This will show you full information about the car as well as give you options to `Edit` or `Delete` it. The edit / delete buttons will be disabled if you are not logged as the user who listed the car. When you hit `Delete` you are given 3 options:

`Yes` - The car is deleted.
`No` - You are redirected to the homepage.
`Edit it` - Loads an edit form with the car data.

### `List Car`

Here is a form you can fill to list a car on the server. All the fields (make, model, year, engine, image, price, phone number and description) have data validation and the form will not allow you to submit it if any of the requirements are not met:

Make,
Model,
Engine,
Price all require a string input between 3 and 20 characters.

Year takes a number between 1900 and the current year.

Image validates if you entered a VALID image link.

Phone requires you to enter a string with a length of 10 or 13 symbols (for Bulgarian mobile phones whether you input with with a 0 or +359).

Description requires a text no longer than 300 symbols. 
