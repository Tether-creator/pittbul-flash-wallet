// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address to, uint amount) external returns (bool);
}

contract PittbulTokenSale {
    address public owner;
    uint public minPurchaseUSD = 2000;
    mapping(bytes32 => Token) public tokens;

    struct Token {
        IERC20 token;
        uint priceUSD;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addToken(string memory id, address tokenAddress, uint priceUSD) external onlyOwner {
        bytes32 tokenId = keccak256(abi.encodePacked(id));
        tokens[tokenId] = Token(IERC20(tokenAddress), priceUSD);
    }

    function buyToken(string memory id) external payable {
        bytes32 tokenId = keccak256(abi.encodePacked(id));
        Token memory token = tokens[tokenId];
        require(token.priceUSD > 0, "Token not listed");

        // Assume 1 BNB = 400 USD (hardcoded for now)
        uint paidUSD = msg.value * 400 / 1e18;
        require(paidUSD >= minPurchaseUSD, "Must pay $2000+");

        uint amount = paidUSD * 1e18 / token.priceUSD;
        token.token.transfer(msg.sender, amount);
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
