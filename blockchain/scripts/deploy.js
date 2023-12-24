const hre = require("hardhat");

async function main() {
  const GetNameAndAge = await hre.ethers.getContractFactory("NameAndAge");
  const getNameAndAge = await GetNameAndAge.deploy();
  await getNameAndAge.waitForDeployment();

  console.log("deployed at :", await getNameAndAge.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x5B5D6eBcD4d020a9b2c713b6147bDe24b336D337
