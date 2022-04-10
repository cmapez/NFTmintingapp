const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Nightmare Corps GOD ", "NCG", "ipfs://QmVrinov3p2BiYgAxjd1Hjm7cQviKxuxCqV5ZUmPhxStsy/");
};
