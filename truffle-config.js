/**
 * More information about configuration can be found at:
 * https://trufflesuite.com/docs/truffle/reference/configuration
 */
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.4.17"
    }
  }
};
