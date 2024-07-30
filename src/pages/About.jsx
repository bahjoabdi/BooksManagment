import React from 'react';
import Footer from '../components/Footer';

const AboutUs = () => {
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
      <section className="flex flex-col items-center bg-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Does Our Library Management System Help?
            </h2>
            <p className="text-gray-700 mb-4">
              Our Library Management System is designed to enhance the learning experience for students by efficiently managing the library's collection of books. With features like tracking book details, managing authors and genres, and more, you can keep your library organized and up-to-date.
            </p>
            <p className="text-gray-700 mb-8">
              We aim to provide an intuitive and user-friendly system that makes it easy for students to find the resources they need and for librarians to manage the library effectively.
            </p>
            <a href="#learn-more" className="inline-block px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg shadow-md hover:bg-blue- transition duration-300">
              About Me
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-100 md:mt-0 flex justify-center">
            <img src="/WhatsApp Image 2024-07-29 at 20.49.47_2eb6cf10.jpg" alt="Library Management System" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
