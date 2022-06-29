// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.7.99;

contract C {
    function uncheckedSubtraction(uint256 a, uint256 b)
        public
        pure
        returns (uint256)
    {
        // This addition will wrap on underflow.
        unchecked {
            return a - b;
        }
    }

    function simpleSubstraction(uint256 a, uint256 b)
        public
        pure
        returns (uint256)
    {
        // This addition will revert on underflow.
        return a - b;
    }
}
