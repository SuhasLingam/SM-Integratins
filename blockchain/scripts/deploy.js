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

//  0x64ffCAdF9c4F694b45281dF6315e8AA678E11255
