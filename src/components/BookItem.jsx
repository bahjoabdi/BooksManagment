///import React, { useContext } from 'react';
import React ,{useContext}from 'react'
//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { BookContext } from '../context/BookContext';
import { BookContext } from '../context/BookContext';
///import { deleteBook } from '../services/bookServices';
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
    <tr>
      <td className="py-2 px-4 border-b">{book.id}</td>
      <td className="py-2 px-4 border-b">{book.title}</td>
      <td className="py-2 px-4 border-b">{book.author}</td>
      <td className="py-2 px-4 border-b">{book.genre}</td>
      <td className="py-2 px-4 border-b">{book.publicationDate}</td>
      <td className="py-2 px-4 border-b">
        <Link to={`/edit/${book.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </td>
    </tr>
    
  );
};

export default BookItem;
