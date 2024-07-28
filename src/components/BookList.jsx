import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import BookItem from './BookItem';
import { getBooks } from '../services/bookServices';
const BookList = () => {
    const { books, dispatch } = useContext(BookContext);
    return (
        <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        <div className="grid grid-cols-1 gap-4">
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
      );
}
export default BookList;