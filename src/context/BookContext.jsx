import React, { createContext, useReducer } from 'react';
import BookReducer from './BookReducer';

const initialState = {
  books: []
};

export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);

  const updateBook = (book) => {
    dispatch({ type: 'UPDATE_BOOK', payload: book });
  };

  return (
    <BookContext.Provider value={{ books: state.books, dispatch, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};
