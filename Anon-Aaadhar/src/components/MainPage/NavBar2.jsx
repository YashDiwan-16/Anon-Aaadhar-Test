import React, { useEffect } from "react";
import "./NavBar2.css";
import logo from "./logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
function NavBar2() {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  useEffect(() => {
    console.log(!isConnected);
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);
  return (
    <>
      <div className="container">
        <div className="navElements firstchild">
          <span>
            <img src={logo} alt="LOGO" />
          </span>
        </div>
        <div style={{ width: "63%" }} className="navElements secondchild">
          <ul>
            <li>
              <Link to="/mainpage">Aadhar Login</Link>
            </li>
            <li>
              <Link to="/DragDrop">Mint NFT</Link>
            </li>
            <li>
              <Link to="/Formpage">Create Loans</Link>
            </li>
            <li>
              <Link to="/loans">Loans</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <ConnectButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar2;
