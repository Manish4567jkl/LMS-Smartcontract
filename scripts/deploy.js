import pkg from 'hardhat';
const { ethers } = pkg;

async function main() {
  const CredentialVerifier = await ethers.getContractFactory("CredentialVerifier");
  const contract = await CredentialVerifier.deploy(); // in v6, this waits for deployment already

  console.log(`✅ Contract deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error("💥 Deployment failed:", error);
  process.exit(1);
});
