import React, { useRef } from "react";
import { useState } from "react";
import "./DragDrop.css";
import NavBar2 from '../MainPage/NavBar2';
import img from '../FileUpload/img4.png';

const DragDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    // setFiles(event.dataTransfer.files);
    console.log(event)
  };
  return (
    <>
      <NavBar2 />
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="formcontainer">
        <div className="left">
        <div className = "card">
    <img src={img} alt=""/>
    <div className="card-content">
      <h2>
        Steps
      </h2>
      <p>
        <h3>1]Generate QR code for your Aadhar</h3>
        <h3>2]Upload the Generated QR </h3>
        <h3>3]Press on continue</h3>
        <h3>4]</h3>
        <h3>5]</h3>
      </p>
      {/* <a href="#" class="button">
        Find out more 
        <span class="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a> */}
    </div>
  </div>
        </div>
        <div className="right">
        right
            
            
        </div>
        
      </div>

      {/* {!files && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>Drag and Drop files from here</h1>
          <h1>Or</h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Image</button>
        </div>
      )}
      <div className="btn-cont">
        <button className="sub">Submit To IPFS</button>
        <button className="mint">Mint NFT</button>
      </div> */}
    </>
  );
};

export default DragDrop;
