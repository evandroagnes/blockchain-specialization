# Blockchain Specialization
Code from Coursera Blockchain Specialization (https://www.coursera.org/specializations/blockchain).

This project uses Truffle Suite. Install it with commands below (you can change the nvm version, see [here](https://github.com/nvm-sh/nvm#installing-and-updating) the newest version:

```shell
# Truffle requires NodeJs and npm, if you've already have it, go to install truffle
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install node
# Install truffle
npm install -g truffle
```
More information about Truffle Suite [here](https://trufflesuite.com/).

## Useful Truffle commands:

To create a bare Truffle project with no smart contracts included:
```shell
truffle init
```
To compile smart contracts:
```shell
truffle compile
```
To run the tests:
```shell
truffle test
```
