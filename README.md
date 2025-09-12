[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

# FaculaToken (ERC20)

A simple ERC20 token built with [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) and deployed using [Hardhat Ignition](https://hardhat.org/ignition).

[Etherscan](https://sepolia.etherscan.io/token/0x5a320F02927cB6e2488caae621B14828b55B292B)

---

## 📖 Overview

- **Name:** Facula
- **Symbol:** FCL
- **Standard:** ERC20 (with 18 decimals by default)
- **Initial Supply:** 1,000,000 FCL (Configurable at deployment)

This project includes:

- An ERC20 token contract (`FaculaToken.sol`)
- Deployment scripts via Hardhat Ignition
- Unit tests (local testing)
- Staging tests (for deployed contract verification)

---

## 🛠️ Requirements

- Node.js v20+
- Yarn or npm
- Hardhat
- dotenv (for environment variables)

Install dependencies:

```bash
yarn install
```

## 🚀 Deployment

1. Compile Contracts

```bash
yarn hardhat compile
```

2. Deploy with Ignition

Pass the initial supply (in wei):

```bash
yarn hardhat ignition deploy ./ignition/modules/TokenModule.js --network <network>
```

## 🧪 Testing

Run Unit and Staging Tests

These test the token logic locally using Hardhat’s in-memory network and test network:

```bash
yarn hardhat test
yarn hardhat test --network <network>
```

📜 License

This project is licensed under the MIT License.
