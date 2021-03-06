/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Betinterface } from "./Betinterface";

export class BetinterfaceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Betinterface> {
    return super.deploy(overrides || {}) as Promise<Betinterface>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Betinterface {
    return super.attach(address) as Betinterface;
  }
  connect(signer: Signer): BetinterfaceFactory {
    return super.connect(signer) as BetinterfaceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Betinterface {
    return new Contract(address, _abi, signerOrProvider) as Betinterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "KYC",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "isBetValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "setKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061020f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063483a83df146100465780637fca25651461008a578063bd3b1046146100e4575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061013e565b005b6100cc600480360360208110156100a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610199565b60405180821515815260200191505060405180910390f35b610126600480360360208110156100fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b9565b60405180821515815260200191505060405180910390f35b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60016020528060005260406000206000915054906101000a900460ff1681565b60026020528060005260406000206000915054906101000a900460ff168156fea2646970667358221220c2bd9b7110c712c4903d817a1ba877d9f86ccf8dc9baa596f2aabdf5877b55a164736f6c63430007000033";
