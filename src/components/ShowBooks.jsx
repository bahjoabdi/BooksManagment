import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookItem from '../components/BookItem';

const ShowBooks = () => {
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

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="Home" className="flex">
                <img className="w-auto h-48" src="/download.png" alt="Logo" />
              </a>
            </div>

            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              </svg>

              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="/" title="Home" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Home </a>
              <a href="/add" title="Add Books" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Add Books </a>
              <a href="/show" title="Show Books" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Show Books </a>
              <a href="/about" title="About" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> About </a>
              <a href="/contact" title="Contact" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Contact </a>
            </div>

            <a href="#" title="Join Now" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-black bg-blue-400 rounded-full" role="button"> Join Now </a>
          </div>
        </div>
      </header>
      
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Book Management System</p>
              <h2 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Book List</h2>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Search and manage your book collection.</p>

              <input
                type="text"
                placeholder="Search by title or author"
                className="mt-4 p-2 border rounded w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="mt-8">
                <table className="min-w-full bg-white border rounded">
                  <thead className="bg-blue-300 text-black">
                    <tr>
                      <th className="py-2 px-4 border-b">ID</th>
                      <th className="py-2 px-4 border-b">Title</th>
                      <th className="py-2 px-4 border-b">Author</th>
                      <th className="py-2 px-4 border-b">Genre</th>
                      <th className="py-2 px-4 border-b">Publication Date</th>
                      <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooks.map((book, index) => (
                      <BookItem key={book.id} book={book} onDelete={handleDelete} className="text-black" />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowBooks;
