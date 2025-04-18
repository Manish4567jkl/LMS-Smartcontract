# 🔐 LMS Smart Contract

A Solidity smart contract for credential issuance and verification, built for integration with a Learning Management System (LMS). This project ensures that academic credentials are secure, verifiable, and tamper-proof using blockchain technology.

Powered by [Hardhat](https://hardhat.org/), deployed on Ethereum-compatible networks.

---

## 📁 Directory Structure

```
manish4567jkl-lms-smartcontract/
├── contracts/               # Solidity smart contracts
│   └── CredentialVerifier.sol
├── scripts/                 # Deployment scripts
│   └── deploy.js
├── ignition/                # Hardhat Ignition modules
│   └── modules/
│       └── Lock.js
├── hardhat.config.js        # Hardhat project configuration
├── package.json             # Project dependencies and metadata
└── README.md                # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Hardhat

### Installation

```bash
git clone https://github.com/Manish4567jkl/manish4567jkl-lms-smartcontract.git
cd manish4567jkl-lms-smartcontract
npm install
```

---

## 🛠 Usage

### Compile Contracts

```bash
npx hardhat compile
```

### Deploy Contracts

To deploy locally:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

To deploy to Sepolia (or another configured network):

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Make sure your `.env` file contains the necessary private key and RPC URL:

```
PRIVATE_KEY=your_private_key
SEPOLIA_RPC=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

---

## 📄 Contract Overview

### CredentialVerifier.sol
 ----------------------------------------------------------------------------------------------------------------
| Function                                             |  Description                                            |
|------------------------------------------------------|---------------------------------------------------------|
| `storeCredential(uint256 studentId, bytes32 hash)`   | Stores a credential hash linked to a student ID         |
| `verifyCredential(uint256 studentId, bytes32 hash)`  | Verifies if a given hash matches the stored one         |
 ----------------------------------------------------------------------------------------------------------------



## 🌐 Network Configuration

Edit `hardhat.config.js` to configure custom networks like Sepolia:

```js
sepolia: {
  url: process.env.SEPOLIA_RPC,
  accounts: [process.env.PRIVATE_KEY]
}
```

---

## ✅ To Do

- [ ] Add test coverage with Hardhat and Chai
- [ ] Add UI frontend to interact with the contract
- [ ] Add event emitters for off-chain indexing

---

## 🧪 Testing (Coming Soon)

You’ll be able to run:

```bash
npx hardhat test
```

To test contract behavior in a local dev environment.

---

## 📜 License

MIT License

---

## 🙌 Author

Made with ❤️ by [@Manish4567jkl](https://github.com/Manish4567jkl)

---

> This smart contract is part of a broader LMS ecosystem enabling blockchain-based credentialing. Future-proof. Verifiable. Trustless.
