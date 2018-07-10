var FlorestinhaToken = artifacts.require("./FlorestinhaToken.sol");
var Minter = artifacts.require("./Minter.sol");

module.exports = function(deployer) {
  deployer.deploy(FlorestinhaToken, 1000, "Florestinha", 10, "FLR");
  deployer.link(FlorestinhaToken, Minter);
  deployer.deploy(Minter);
};
