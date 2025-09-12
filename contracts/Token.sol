// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FaculaToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Facula", "FCL") {
        _mint(msg.sender, initialSupply);
    }
}
