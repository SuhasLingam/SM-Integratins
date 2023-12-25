import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../ContractABI/NameAndAge.json";
import AgeAndName from "./ageAndName";

const Main = () => {
  const [account, setAccount] = useState("Not Connected");
  const [con, setCon] = useState("Connecting.....");
  const [conAddress, setConAddress] = useState("");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  //   const [add, getAdd] = useState("Not Connected");
  //   const [but, setBut] = useState("Connect wallet");
  //   const [con, setCon] = useState("Still not deployed");
  //const [data, setData] = useState("Not yet");
  //let contract;
  // const requstAcc = async () => {

  //   if (window.ethereum) {
  //     console.log("Detected");

  //     try {
  //       const { ethereum } = window;
  //       const accounts = await ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       console.log("Wallet Address is : ", accounts[0]);
  //       getAdd(accounts[0]);
  //       setBut("Connected");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log("No Metamask");
  //   }
  // };
  //   const connectMetamaskAndSmartContract = async () => {
  //     if (typeof window.ethereum !== "undefined") {
  //       requstAcc();

  //       // Smart Contract Interactions

  //       const provider = new ethers.BrowserProvider(window.ethereum);

  //       const signer = provider.getSigner();
  //       const ContractAbi = abi.abi;
  //       const ContractAddress = "0x5B5D6eBcD4d020a9b2c713b6147bDe24b336D337";
  //       // Contract Connection

  //       contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
  //       setCon(await contract.getAddress());
  //       console.log("Contract Address is : ", await contract.getAddress());
  //     }
  //   };

  useEffect(() => {
    const connectMetamaskAndSmartContract = async () => {
      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAccount(accounts[0]);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer =
          (await provider.getSigner()) ||
          (await provider.getSigner(accounts[0]));

        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({ provider, signer, contract });
        setCon("Connected");
        setConAddress(await contract.getAddress());
        console.log("Contract Address:", contract.getAddress());
        console.log("Contract ABI:", contract.interface.format());
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };
    connectMetamaskAndSmartContract();
  }, []);

  return (
    <div>
      <div className="bg-purple-300 p-6">
        <button className="border-3 border-black rounded-xl bg-slate-800 text-white p-3">
          {con}
        </button>
        <p className="text-2xl font-bold">Wallet Address is : {account} </p>
        <p className="test-xl font-semibold ">
          Contract Address is : {conAddress}
        </p>
      </div>

      <div>
        <AgeAndName state={state} />
      </div>
    </div>
  );
};

export default Main;
