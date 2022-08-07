const baseUrl = "http://localhost:3030";

export const getAll = () => {
    return fetch(`${baseUrl}/data/cars`)
        .then(res => res.json())
}

export default getAll();