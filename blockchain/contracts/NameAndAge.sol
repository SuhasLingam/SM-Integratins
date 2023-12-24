// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract NameAndAge {
   string public name = "SuhasLingam";
   uint256 public age = 21;

    function ChangeAge() public {
        age = 19;
    }
   function changeName() public {
    name = "SuhasSrinivasLingam";
   }
}
