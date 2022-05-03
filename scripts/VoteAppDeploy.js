const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
 
  const VoteApp = await ethers.getContractFactory("VoteApplication");
  const voteApp = await VoteApp.deploy();

  await voteApp.deployed();

  console.log("Vote Application deployed to:", voteApp.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
