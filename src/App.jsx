import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import  AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ShowBooks from './components/ShowBooks';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/show" element={<ShowBooks />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
