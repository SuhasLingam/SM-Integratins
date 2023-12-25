// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NameAndAge {
    string public name = "SuhasLingam";
    uint256 public age = 21;
    address payable public owner;

    function ChangeAge() public {
        age = 19;
    }

    function changeName() public {
        name = "SuhasSrinivasLingam";
    }

    constructor() {
        owner = payable(msg.sender);
    }

    //to check balance

    function getBal() public view returns (uint) {
        return address(msg.sender).balance;
    }
}
