import dotenv from "dotenv";
dotenv.config();
import "@nomicfoundation/hardhat-toolbox";

export default {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
