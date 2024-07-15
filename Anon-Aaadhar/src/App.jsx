import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Mainpg from "./components/MainPage/mainpg"; // Correct the import path and component name

import FormPage from "./components/Form/FormPage";

import DragDrop from "./components/FileUpload/DragDrop";
// import Mainpg from './components/MainPage/mainpg'; // Correct the import path and component name
import Profile from "./components/Profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Use capital letter for component */}
        <Route path="/mainPage" element={<Mainpg />} />
        <Route path="/FormPage" element={<FormPage />} />{" "}
        {/* Use capital letter for component */}
        <Route path="/DragDrop" element={<DragDrop />} />{" "}
        {/* Use capital letter for component */}
        <Route path="Profile" element={<Profile />} />{" "}
        {/* Use capital letter for component */}
      </Routes>
    </Router>
    // <DragDrop/>
  );
}

export default App;
