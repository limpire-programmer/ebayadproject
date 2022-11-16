    ╔══╗ ╔═══╗╔╗  ╔╗╔═══╗╔═══╗    ╔════╗╔═══╗╔╗╔═╗╔═══╗╔═╗ ╔╗
    ║╔╗║ ║╔═╗║║╚╗╔╝║║╔═╗║╚╗╔╗║    ║╔╗╔╗║║╔═╗║║║║╔╝║╔══╝║║╚╗║║
╔══╗║╚╝╚╗║║ ║║╚╗╚╝╔╝║║ ║║ ║║║║    ╚╝║║╚╝║║ ║║║╚╝╝ ║╚══╗║╔╗╚╝║
║╔╗║║╔═╗║║╚═╝║ ╚╗╔╝ ║╚═╝║ ║║║║      ║║  ║║ ║║║╔╗║ ║╔══╝║║╚╗║║
║║═╣║╚═╝║║╔═╗║  ║║  ║╔═╗║╔╝╚╝║     ╔╝╚╗ ║╚═╝║║║║╚╗║╚══╗║║ ║║║
╚══╝╚═══╝╚╝ ╚╝  ╚╝  ╚╝ ╚╝╚═══╝     ╚══╝ ╚═══╝╚╝╚═╝╚═══╝╚╝ ╚═╝
                                                             
                                                             
eBayad Token (EBTKN) is an ERC20 TOKEN running on Goerli testnet, ready to be deployed on the mainnet.

//contracts ebayadtoken.sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


>> You can initially test the ebayadtoken contract file to remix IDE to test it before doing some editing <<<




Ethereum ERC20 Standard:
https://ethereum.org/en/developers/docs/standards/tokens/erc-20/

===========================

Open Zeppelin ERC20 Documentation:
https://docs.openzeppelin.com/contracts/4.x/api/token/erc20

===========================

If you get an error (especially the matchers plug-in):
1. Uninstall the @nomiclabs/hardhat-waffle and ethereum-waffle packages:
---->  npm uninstall @nomiclabs/hardhat-waffle ethereum-waffle   <----------

2. Then install the Hardhat Chai Matchers plugin:
----> npm install --save-dev @nomicfoundation/hardhat-chai-matchers <-------

https://hardhat.org/hardhat-chai-matchers/docs/migrate-from-waffle
