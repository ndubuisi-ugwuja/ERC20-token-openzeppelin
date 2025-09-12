const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FaculaToken Unit Tests", function () {
  let token, deployer, user1;

  beforeEach(async function () {
    if (network.name === "sepolia") {
      this.skip(); // Don't run staging tests on local network
    }

    [deployer, user1] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("FaculaToken");
    token = await MyToken.deploy(ethers.parseEther("1000")); // 1000 tokens
    await token.waitForDeployment();
  });

  it("should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("Facula");
    expect(await token.symbol()).to.equal("FCL");
  });

  it("should mint initial supply to deployer", async function () {
    const balance = await token.balanceOf(deployer.address);
    expect(balance).to.equal(ethers.parseEther("1000"));
  });

  it("should transfer tokens correctly", async function () {
    await token.transfer(user1.address, ethers.parseEther("100"));
    const user1Balance = await token.balanceOf(user1.address);
    expect(user1Balance).to.equal(ethers.parseEther("100"));
  });

  it("should fail if transfer amount exceeds balance", async function () {
    await expect(
      token.connect(user1).transfer(deployer.address, ethers.parseEther("1")),
    ).to.be.revertedWithCustomError(token, "ERC20InsufficientBalance");
  });

  it("should approve and transferFrom correctly", async function () {
    await token.approve(user1.address, ethers.parseEther("50"));
    await token
      .connect(user1)
      .transferFrom(deployer.address, user1.address, ethers.parseEther("50"));

    expect(await token.balanceOf(user1.address)).to.equal(
      ethers.parseEther("50"),
    );
  });
});
