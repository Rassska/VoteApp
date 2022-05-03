require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `${process.env.DEPLOY_KEY_RINKEBY}`,
      accounts: [`${process.env.DEPLOY_ACC_RINKEBY}`],
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true,
    }, 
    hardhat: {
      chainId: 1337
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
