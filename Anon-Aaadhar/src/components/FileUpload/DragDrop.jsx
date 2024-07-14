
import React, { useRef, useState, useEffect } from "react";
import { AnonAadhaarProof, LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import "./DragDrop.css";
import NavBar2 from '../MainPage/NavBar2';
import img from '../FileUpload/img4.png';

const DragDrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [anonAadhaar] = useAnonAadhaar();

  // const seed = 188215933815421822754175153135772413169103;

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const handleDragOver = (event) => { 
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <NavBar2 />
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="formcontainer">
        <div className="left">
        <div class = "card">
    <img src={img} alt=""/>
    <div class="card-content">
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

      {!files && (
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

      </div>
      <LogInWithAnonAadhaar
        nullifierSeed={12345}
        fieldsToReveal={[
          "revealAgeAbove18",
          "revealPinCode",
          "revealGender",
          "revealPinCode",
        ]}
        useTestAadhaar={true}
      />
      <p>{anonAadhaar?.status}</p>
      <div>
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <AnonAadhaarProof
              code={JSON.stringify(anonAadhaar.anonAadhaarProofs, null, 2)}
            />
          </>
        )}
      </div>

      </div> 

    </>
  );
};

export default DragDrop;

