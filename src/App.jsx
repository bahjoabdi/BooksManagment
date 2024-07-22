import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ShowBooks from './components/ShowBooks';

const App = () => {
  return (
    // <BookProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/add" element={<AddBook />} />
    //       <Route path="/show" element={<ShowBooks />} />
    //       <Route path="/edit/:id" element={<EditBook />} />
    //     </Routes>
    //   </Router>
    // </BookProvider>
  );
};

export default App;