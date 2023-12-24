import React, { useState } from "react";

const connectWallet = () => {
  const [add, getAdd] = useState("Not Connected");
  const [but, setBut] = useState("");

  const requstAcc = async () => {
    if (window.ethereum) {
      console.log("Detected");

      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        getAdd(accounts[0]);
        setBut("Connected");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No Metamask");
    }
  };
  const connectMetamaskAndSmartContract = async () => {
    if (typeof window.ethereum !== "undefined") {
      requstAcc();

      // Smart Contract Interactions
    }
  };

  return (
    <div className="bg-purple-300 p-6">
      <button
        className="border-3 border-black rounded-xl bg-slate-800 text-white p-3"
        onClick={connectMetamaskAndSmartContract}
      >
        {but ? { setBut } : "Connect wallet"}
      </button>
      <p>Wallet Address is : {add} </p>
    </div>
  );
};

export default connectWallet;
