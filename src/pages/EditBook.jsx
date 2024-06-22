import React, { useContext } from 'react';
import BookForm from '../components/BookForm';
import { BookContext } from '../context/BookContext';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const { books, updateBook } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  const handleSubmit = (updatedBook) => {
    updateBook({ ...updatedBook, id: book.id });
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm onSubmit={handleSubmit} initialData={book} />
    </div>
  );
};

export default EditBook;
