//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BooleanMagic {
    uint256 _packedBools;

    constructor() {}

    function getBoolean(uint256 _boolNumber) public view returns (bool) {
        uint256 flag = (_packedBools >> _boolNumber) & uint256(1);
        console.log((1 << 64) - 1);
        return (flag == 1 ? true : false);
    }

    function setBoolean(uint256 _boolNumber, bool _value) public {
        if (_value) {
            _packedBools = _packedBools | (uint256(1) << _boolNumber);
        } else {
            _packedBools = _packedBools & ~(uint256(1) << _boolNumber);
        }
    }
}
