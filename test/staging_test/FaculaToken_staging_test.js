const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();

describe("FaculaToken Staging Tests", function () {
  let token, accounts;

  before(async function () {
    if (network.name !== "sepolia") {
      this.skip(); // Don't run staging tests on local network
    }

    accounts = await ethers.getSigners();

    // Load already deployed contract
    const tokenAddress = process.env.TOKEN_ADDRESS; // set in .env after deployment
    token = await ethers.getContractAt("FaculaToken", tokenAddress);
  });

  it("deployer should have initial supply", async function () {
    const totalSupply = await token.totalSupply();
    const deployerBalance = await token.balanceOf(accounts[0].address);
    expect(deployerBalance).to.equal(totalSupply);
  });
});
