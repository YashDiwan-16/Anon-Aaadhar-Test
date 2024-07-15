import React from "react";
import "./NavBar.css";

import Button from "../../Button/Button";

import logo from "../NavBar/logo.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";

function NavBar(hasOptions, { option1, option2, option3, option4, option5 }) {
  const options = { option1, option2, option3, option4, option5 };
  const navHasOptions = hasOptions;

  return (
    <>
      <div className="container">
        <div className="navElements">
          <span>
            <img src={logo} alt="LOGO" />
          </span>
        </div>
        <div className="navElements2">
          Privacy to Security: Empower your aadhar
        </div>
        <div className="navElements3">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "avatar",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
