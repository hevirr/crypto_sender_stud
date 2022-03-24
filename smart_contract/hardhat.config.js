require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Zr18Nrhqs3fv0JJTlC6DHEBzlZnT3N85",
      accounts: [
        "bd79d0ec24074d3aa1682a02bd10eb1c051a0d64e410786d22f8ea8671640992",
      ],
    },
  },
};
