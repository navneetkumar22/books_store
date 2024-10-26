import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;
console.log('Base url ', BASE_URL);


//get all books
export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data
    } catch (error) {
        // throw error
        console.log(error);

    }
}

//add a book
// export const addBook = async (book) => {
//     try {
//         console.log(book);

//         const response = await axios.post(`${BASE_URL}/books`, book);
//         // return response.data

//     } catch (error) {
//         console.log(error);
//     }
// }

//update a book
export const updateBook = async (id, book) => {
    try {
        const response = await axios.put(`${BASE_URL}/books/${id}`, book);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

//delete a book
export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/books/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}