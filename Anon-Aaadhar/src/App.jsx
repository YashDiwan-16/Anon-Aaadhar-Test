import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
import Mainpg from './components/MainPage/mainpg'; // Correct the import path and component name
import DragDrop from './components/FileUpload/DragDrop';
// import Mainpg from './components/MainPage/mainpg'; // Correct the import path and component name
import Profile from './components/Profile/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profile />} /> {/* Use capital letter for component */}
      </Routes>
    </Router>
    // <DragDrop/>
  );
}

export default App;
