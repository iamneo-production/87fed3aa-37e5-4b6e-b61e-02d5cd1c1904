import http from "../util/http";
import axios from 'axios';

export const getAllUsers = () => {
    return http.get("/users");
};

export const getuser = (id) => {
    return http.get(`/users/${id}`);
};

// export const getUserByEmail = (email) => {
//     try{
//         const response =  http.get('/users/',{
//                                 params: {
//                                     email: email,
//                                 },
//                                 });

//          if (response.data.length > 0) {
//             // Assuming the email is unique, return the first user found
//             return response.data[0];
//             } else {
//             return null; // No user found with the given email
//             }
//         } catch (error) {
//             console.error('Error finding user:', error);
//             return null;

//     }
// };


export const findUserByEmail = async (email,password) => {
  try {
    const response = await axios.get('http://localhost:8080/users', {
      params: {
        email: email,
        password:password
      },
    });

    if (response.data.length > 0) {
      // Assuming the email is unique, return the first user found
      return response.data[0];
    } else {
      return null; // No user found with the given email
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return null;
  }
};


export const createUser = (data) => {
    return http.post("/users", data);
};

export const updateUser = (id, data) => {
    return http.put(`/users/${id}`, data);
};

export const removeCountry = (id) => {
    return http.delete(`/users/${id}`);
};