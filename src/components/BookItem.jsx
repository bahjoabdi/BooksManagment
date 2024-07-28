import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { deleteBook } from '../services/bookServices';

const BookItem = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  const handleDelete = async () => {
    try {
      await deleteBook(book.id);
      dispatch({ type: 'DELETE_BOOK', payload: book.id });
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    
  );
};

export default BookItem;
