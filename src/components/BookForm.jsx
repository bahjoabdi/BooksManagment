import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [genre, setGenre] = useState(initialData.genre || '');
  const [publicationDate, setPublicationDate] = useState(initialData.publicationDate || '');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setGenre(initialData.genre);
      setPublicationDate(initialData.publicationDate);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, genre, publicationDate });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
      </div>
     
      
     
      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          {initialData.id ? 'Update Book' : 'Add Book'}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
