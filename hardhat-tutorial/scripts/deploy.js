const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("..//constants");

async function main(){
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  /**
   * A contractFactory in ether.js is an abstraction used to deploy new smart contracts,
   * so crytoDevsContract here is a factory for instances fo our cryptoDevs contract.
   */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  //print the adddress of the deployed contract
  console.log(
    "Crpto Devs Contract Address:",
    deployedCryptoDevsContract
  );
}

// call the main function and catch id there is an error
main()
  .then(() => process.exit(0))
  .catch((error) =>{
    console.error(error);
    process.exit(1);
  });