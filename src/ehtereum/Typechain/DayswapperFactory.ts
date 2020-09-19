/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Dayswapper } from "./Dayswapper";

export class DayswapperFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Dayswapper {
    return new Contract(address, _abi, signerOrProvider) as Dayswapper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address"
      },
      {
        internalType: "uint256[3]",
        name: "_rewardRatio",
        type: "uint256[3]"
      }
    ],
    name: "payToIntroducer",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address"
      },
      {
        internalType: "uint256[3]",
        name: "_rewardRatio",
        type: "uint256[3]"
      }
    ],
    name: "payToTree",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_networker",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "reportVolume",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
