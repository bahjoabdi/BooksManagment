// src/context/BookContext.jsx
import React, { createContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ACTION = {
  ADD_BOOK: 'ADD_BOOK',
  DELETE_BOOK: 'DELETE_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  SET_BOOKS: 'SET_BOOKS',
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case ACTION.DELETE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    case ACTION.UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case ACTION.SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

const initialState = {
  books: [],
};

export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', initialState.books);
  const [state, dispatch] = useReducer(bookReducer, { books: storedBooks });

  const addBook = (book) => {
    const updatedBooks = [...state.books, book];
    dispatch({ type: ACTION.ADD_BOOK, payload: book });
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
    <BookContext.Provider value={{ books: state.books, addBook, deleteBook, updateBook, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};