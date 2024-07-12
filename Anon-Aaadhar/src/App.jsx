import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Mainpg from './components/MainPage/mainpg'; // Correct the import path and component name
import FormPage from './components/Form/FormPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Use capital letter for component */}
        <Route path='/mainpage' element={< Mainpg/>} /> Use capital letter for component
        <Route path='/FormPage' element={< FormPage/>} /> {/* Use capital letter for component */}
      </Routes>
    </Router>
  );
}

export default App;
