import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookItem from '../components/BookItem';
const ShowBooks = () => {}
const { books, dispatch } = useContext(BookContext);
const [searchTerm, setSearchTerm] = useState('');

const filteredBooks = books.filter(
  (book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleDelete = (id) => {
  dispatch({ type: 'DELETE_BOOK', payload: id });
};
return (<h1>ShowBook</h1>
    )