import React, { useRef } from "react";
import { useState } from "react";
import "./DragDrop.css";
import NavBar2 from "../MainPage/NavBar2";
import img from "../FileUpload/img4.png";

const DragDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    // setFiles(event.dataTransfer.files);
    console.log(event);
  };
  return (
    <>
      <NavBar2 />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </>
  );
};

export default DragDrop;
