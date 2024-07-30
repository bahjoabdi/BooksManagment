//import axios from 'axios';
import axios from "axios";

// Define the base URL for your mock API
const API_URL = 'http://localhost:5173/api/books';

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.books; // Adjust to match the response structure
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data.book; // Adjust to match the response structure
  } catch (error) {
    console.error('Failed to add book:', error);
    return null;
  }
};

export const editBook = async (book) => {
  try {
    const response = await axios.put(`${API_URL}/${book.id}`, book);
    return response.data.book; // Adjust to match the response structure
  } catch (error) {
    console.error('Failed to edit book:', error);
    return null;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Adjust to match the response structure
  } catch (error) {
    console.error('Failed to delete book:', error);
    return null;
  }
};
