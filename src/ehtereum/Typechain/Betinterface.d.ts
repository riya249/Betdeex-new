/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BetinterfaceInterface extends ethers.utils.Interface {
  functions: {
    "KYC(address)": FunctionFragment;
    "isBetValid(address)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "KYC", values: [string]): string;
  encodeFunctionData(functionFragment: "isBetValid", values: [string]): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;

  decodeFunctionResult(functionFragment: "KYC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isBetValid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;

  events: {};
}

export class Betinterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BetinterfaceInterface;

  functions: {
    KYC(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "KYC(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isBetValid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isBetValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setKYC(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setKYC(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  KYC(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isBetValid(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isBetValid(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setKYC(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setKYC(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    KYC(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isBetValid(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isBetValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setKYC(user: string, overrides?: CallOverrides): Promise<void>;

    "setKYC(address)"(user: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    KYC(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isBetValid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isBetValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setKYC(user: string, overrides?: Overrides): Promise<BigNumber>;

    "setKYC(address)"(user: string, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    KYC(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "KYC(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBetValid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBetValid(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setKYC(user: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setKYC(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
