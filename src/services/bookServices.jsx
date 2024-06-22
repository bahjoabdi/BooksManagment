import axios from 'axios';

const API_URL = 'http://localhost:5173/show';

export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

export const editBook = async (book) => {
  const response = await axios.put(`${API_URL}/${book.id}`, book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
