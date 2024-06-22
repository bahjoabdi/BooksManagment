import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, initialData }) => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', publicationDate: '' });

  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Publication Date</label>
        <input
          type="date"
          name="publicationDate"
          value={book.publicationDate}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {initialData ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
