// src/context/BookContext.jsx
import React, { createContext, useReducer } from 'react';
import BookReducer, {ACTION} from './BookReducer';
import useLocalStorage from '../hooks/useLocalStorage';
// src/context/BookContext.jsx
import React, { createContext, useReducer } from 'react';
import BookReducer, {ACTION} from './BookReducer';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
  books: [],
};

export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', initialState.books);
  const [state, dispatch] = useReducer(BookReducer, { books: storedBooks });

  const addBook = (book) => {
    const updatedBooks = [...state.books, { ...book, id: state.books.length + 1 }];
    dispatch({ type: ACTION.ADD_BOOK, payload: { ...book, id: state.books.length + 1 } });
    setStoredBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = state.books.filter((book) => book.id !== id);
    dispatch({ type: ACTION.DELETE_BOOK, payload: id });
    setStoredBooks(updatedBooks);
  };

  const updateBook = (book) => {
    const updatedBooks = state.books.map((b) => (b.id === book.id ? book : b));
    dispatch({ type: ACTION.UPDATE_BOOK, payload: book });
    setStoredBooks(updatedBooks);
  };

  const setBooks = (books) => {
    dispatch({ type: ACTION.SET_BOOKS, payload: books });
    setStoredBooks(books);
  };

  return (
    <BookContext.Provider value={{ books: state.books, addBook, deleteBook, updateBook, setBooks , dispatch}}>
      {children}
    </BookContext.Provider>
  );
};
