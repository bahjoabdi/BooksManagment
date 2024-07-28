import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import BookItem from './BookItem';
import { getBooks } from '../services/bookServices';
const BookList = () => {
    const { books, dispatch } = useContext(BookContext);
    return (
        <h1>welicome book list</h1>
      );
}