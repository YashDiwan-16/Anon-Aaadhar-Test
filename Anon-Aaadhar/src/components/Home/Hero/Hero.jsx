import React, { Component, useEffect, useState } from "react";
// import { ethers } from "ethers";
import { useAccount } from "wagmi";
import "./Hero.css";
// import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const Hero = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  // const handleConnectMetamask = async () => {
  //   if (window.ethereum) {
  //     try {
  //       await window.eth_requestAccounts; // Request account access
  //       console.log(ethers);
  //       const provider = new ethers.BrowserProvider(window.ethereum);
  //       const signer = provider.getSigner();
  //       const address =  (await signer).getAddress()
  //       console.log("Connected account:", address);
  //       // Redirect or perform actions after successful login
  //       navigate("/mainpage");
  //     } catch (error) {
  //       console.error("Error connecting Metamask:", error);
  //     }
  //   } else {
  //     console.error("Metamask not detected");
  //     // Inform the user to install Metamask or use an Ethereum-compatible browser
  //     alert("Metamask not detected. Please install Metamask or use an Ethereum-compatible browser.");
  //   }
  // };
  useEffect(() => {
    console.log(isConnected);
    if (isConnected) {
      navigate("/mainpage");
    }
  }, [isConnected, navigate]);

  return (
    <div className="heroContainer">
      <div className="left">
        <div className="lcont">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, soluta. Illo ex ipsa quasi incidunt rerum, molestiae
            sint unde et beatae assumenda. Libero adipisci, esse explicabo odit
            nisi ab iusto, harum neque officia praesentium ad Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sint quasi et necessitatibus
            repellendus incidunt soluta, non dolorem minus aperiam amet!
          </p>
        </div>
      </div>

      <div className="right">
        <img
          src="/src/assets/homepage.png"
          style={{ width: "500px", height: "500px" }}
          alt="homepage"
        />
      </div>
    </div>
  );
};

export default Hero;
