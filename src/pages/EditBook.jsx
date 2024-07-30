import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { useContext, useEffect, useState } from 'react';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, updateBook } = useContext(BookContext);
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: ''
  });

  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === parseInt(id, 10));
    if (bookToEdit) {
      setBookData(bookToEdit);
    }
  }, [id, books]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(bookData);
    navigate('/show');
  };

  return (
    <div className="bg-white min-h-screen p-8">
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
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Book Management System</p>
              <h2 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Edit Book</h2>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Update the details of the book below.</p>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={bookData.title}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700">Author</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={bookData.author}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="genre" className="block text-gray-700">Genre</label>
                    <input
                      type="text"
                      id="genre"
                      name="genre"
                      value={bookData.genre}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="publicationDate" className="block text-gray-700">Publication Date</label>
                    <input
                      type="date"
                      id="publicationDate"
                      name="publicationDate"
                      value={bookData.publicationDate}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full"
                    />
                  </div>
                  <button type="submit" className="bg-blue-400 text-black px-4 py-2 rounded">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditBook;
