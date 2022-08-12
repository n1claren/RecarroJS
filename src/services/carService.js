import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/cars";

export const getAll = () => request.get(baseUrl);

export const list = (carData) => request.post(baseUrl, carData);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const edit = (carId, carData) => request.put(`${baseUrl}/${carId}`, carData);

export const deleteCar = (carId) => request.del(`${baseUrl}/${carId}`);