import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import { addBook, getBooks } from '../services/bookServices';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const { dispatch } = useContext(BookContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      dispatch({ type: 'SET_BOOKS', payload: booksData });
    };

    fetchBooks();
  }, [dispatch]);

  const handleAddBook = async (book) => {
    const newBook = await addBook(book);
    dispatch({ type: 'ADD_BOOK', payload: newBook });
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="Home" className="flex">
                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" />
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
            </div>

            <a href="#" title="Join Now" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Join Now </a>
          </div>
        </div>
      </header>

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Book Management System</p>
              <h2 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Add a New Book</h2>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Fill in the details below to add a new book to your collection.</p>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <BookForm onSubmit={handleAddBook} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBook;
