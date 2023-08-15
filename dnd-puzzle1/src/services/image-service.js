import http from "../util/http";

export const getAllImages = async () => {
    try {
        const response = await http.get("/images");
        return response.data;
    } catch (error) {
        console.error('Error getting images:', error);
        return [];
    }
};

export const getimage = async (id) => {
    try {
        const response = await http.get(`/images/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting image with id ${id}:`, error);
        return null;
    }
};