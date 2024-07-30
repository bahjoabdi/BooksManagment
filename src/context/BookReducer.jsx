// src/context/bookReducer.js

export const ACTION = {
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
        return { ...state, books: state.books.map((book) => (book.id === action.payload.id ? action.payload : book)) };
      case ACTION.SET_BOOKS:
        return { ...state, books: action.payload };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  