import http from "../util/http";

export const getAllImages = () => {
    return http.get("/images");
};

export const getimage = (id) => {
    return http.get(`/images/${id}`);
};

export const createCountry = (data) => {
    return http.post("/countries", data);
};

export const updateCountry = (id, data) => {
    return http.put(`/countries/${id}`, data);
};

export const removeCountry = (id) => {
    return http.delete(`/countries/${id}`);
};

