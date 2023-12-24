import React, { useEffect, useState } from "react";

const ageAndName = ({ state }) => {
  const { contract } = state;
  const [name, SetName] = useState("Click Button to Display");
  const [age, SetAge] = useState(0);

  const [newName, setNewName] = useState("Yet To Update");
  const [newAge, setNewAge] = useState(0);

  const GetNameVar = async () => {
    const tx = await contract.name();
    SetName(tx);
  };
  const GetAgeVar = async () => {
    const tx = await contract.age();
    SetAge(parseInt(tx));
  };

  const updateName = async () => {
    const tx = await contract.changeName();
    await tx.wait();
    const newName = await contract.name();
    setNewName(newName);
  };

  const updateAge = async () => {
    const tx = await contract.ChangeAge();
    await tx.wait();
    const newAge = await contract.age();
    setNewAge(parseInt(newAge));
  };

  return (
    <>
      <div className="w-screen h-screen">
        <div className="p-9 bg-yellow-200">
          <h1 className="text-3xl font-extrabold">Get Name</h1>
          <button
            onClick={GetNameVar}
            className="border-black border-2 rounded-xl bg-red-400 p-3 text-white"
          >
            Name
          </button>
          <p>Name is : {name}</p>
          <br />
          <h1 className="text-3xl font-extrabold">Get Age</h1>
          <button
            onClick={GetAgeVar}
            className="border-black border-2 rounded-xl bg-red-400 p-3 text-white"
          >
            Age
          </button>
          <p>age is : {age} </p>
        </div>

        <div className="p-9 bg-green-300">
          <h1 className="text-3xl font-extrabold">Update Name</h1>
          <button
            onClick={updateName}
            className="border-black border-2 rounded-xl bg-red-400 p-3 text-white"
          >
            Update Name
          </button>
          <p>Updated Name is : {newName} </p>
          <br />
          <h1 className="text-3xl font-extrabold">Update Age</h1>
          <button
            onClick={updateAge}
            className="border-black border-2 rounded-xl bg-red-400 p-3 text-white"
          >
            Update Age
          </button>
          <p>Updated Age is : {newAge} </p>
        </div>
      </div>
    </>
  );
};

export default ageAndName;
