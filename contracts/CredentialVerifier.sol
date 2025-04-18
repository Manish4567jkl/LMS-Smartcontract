// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialVerifier {

    // Mapping to store student credential hashes by their numeric ID
    mapping(uint => string) public studentHashes;

    event CredentialStored(uint indexed studentId, string hash);

    function storeCredentialHash(uint studentId, string calldata hash) public {
        studentHashes[studentId] = hash;
        emit CredentialStored(studentId, hash);
    }

    function verifyCredential(uint studentId, string calldata hash) public view returns (bool) {
        return keccak256(abi.encodePacked(studentHashes[studentId])) == keccak256(abi.encodePacked(hash));
    }
}
