
const hre = require("hardhat");

async function main() {
  const ebayadtoken = await hre.ethers.getContractFactory("ebayadtoken");
  const ebayadtoken2 = await ebayadtoken.deploy(100000000, 50);

  await ebayadtoken.deployed;

  console.log ("ebayad token is now deployed oyeahh!", ebayadtoken2.address);
}
  
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
