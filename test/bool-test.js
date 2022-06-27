const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bool Magic", function () {
  it("Should return the new greeting once it's changed", async function () {
    const BooleanMagic = await ethers.getContractFactory("BooleanMagic");
    const booleanMagic = await BooleanMagic.deploy();
    await booleanMagic.deployed();

    expect(await booleanMagic.getBoolean(257)).to.equal(false);

    const setBooleanTxn = await booleanMagic.setBoolean(45, true);

    // // wait until the transaction is mined
    await setBooleanTxn.wait();

    expect(await booleanMagic.getBoolean(45)).to.equal(true);
  });
});
