"use strict";

// require("hardhat-typechain");
require("@nomiclabs/hardhat-ethers");

require("@nomiclabs/hardhat-waffle"); // require("@nomiclabs/hardhat-etherscan");


require('@openzeppelin/hardhat-upgrades');

var INFURA_API_KEY = 'ef06f7345ff54c2d90aa91310d3a1fa9';
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/".concat(INFURA_API_KEY)
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/".concat(INFURA_API_KEY)
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/".concat(INFURA_API_KEY)
    },
    goerli: {
      url: "https://goerli.infura.io/v3/".concat(INFURA_API_KEY)
    },
    kovan: {
      url: "https://kovan.infura.io/v3/".concat(INFURA_API_KEY)
    },
    bscTest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ["0x7bd88db8482d6f6b11d796d553b032bcb0e3cfa88b263496b62dd770e17e5628"]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  solidity: {
    compilers: [{
      version: "0.7.0"
    }, {
      version: "0.7.3"
    }, {
      version: "0.8.0"
    }, {
      version: "0.8.1"
    }],
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};