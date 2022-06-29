const { expect } = require("chai");
const { ethers } = require("hardhat");

let deployContract;

describe('Solidity Unchecked Tests', () => {
    beforeEach('', async () => {
        const uncheckedContract = await ethers.getContractFactory("C");
        deployContract = await uncheckedContract.deploy();
        await deployContract.deployed();
    });

    it('should wrap on negative result', async () => {
        expect(await deployContract.uncheckedSubtraction(2, 4)).to.not.be.equal(0);
    });

    it('should throw an error on negative result', async () => {
        await expect(deployContract.simpleSubstraction(2, 4)).to.be.reverted;
    });
});
