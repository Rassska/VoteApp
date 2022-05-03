const {expect} = require("chai")
const {ethers} = require("hardhat")

describe("VoteApplication", function () {
    
    let accounts = [];
    let deployedVoteApp;

    beforeEach(async function() {
        accounts = await ethers.getSigners()
        const VoteApplication = await ethers.getContractFactory("VoteApplication", accounts[0])
        deployedVoteApp = await VoteApplication.deploy()
        await deployedVoteApp.deployed()
        console.log(deployedVoteApp.address)

    })

    it("should be deployed", async function() {
        expect(deployedVoteApp.address).to.be.properAddress
    })
})