import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../ContractABI/NameAndAge.json";

const connectWallet = () => {
  const [add, getAdd] = useState("Not Connected");
  const [but, setBut] = useState("Connect wallet");
  const [con, setCon] = useState("Still not deployed");
  let contract;
  const requstAcc = async () => {
    if (window.ethereum) {
      console.log("Detected");

      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Wallet Address is : ", accounts[0]);
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

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const ContractAbi = abi.abi;
      const ContractAddress = "0x5B5D6eBcD4d020a9b2c713b6147bDe24b336D337";
      // Contract Connection

      contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
      setCon(await contract.getAddress());
      console.log("Contract Address is : ", await contract.getAddress());
    }
  };

  const getName = async () => {};

  return (
    <div className="bg-purple-300 p-6">
      <button
        className="border-3 border-black rounded-xl bg-slate-800 text-white p-3"
        onClick={connectMetamaskAndSmartContract}
      >
        {but}
      </button>
      <p className="text-2xl font-bold">Wallet Address is : {add} </p>
      <p className="test-xl font-semibold "> Contract Address is : {con} </p>
    </div>
  );
};

export default connectWallet;
