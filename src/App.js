import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 How Far Na!! Ommoh I Don Dey Code NFT ooh!
        </div>

        <div className="bio">
        I am Akuchukwu and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!

        My First Smart Contract
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
