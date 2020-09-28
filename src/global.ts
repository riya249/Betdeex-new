import { ethers } from 'ethers';
import { CustomWallet } from './ehtereum/CustomWallet';
import { BetdeexInterface } from './ehtereum/Typechain/Betdeex';
import { Betdeex } from './ehtereum/Typechain/Betdeex';
import { Bet } from './ehtereum/Typechain/Bet';

declare global {
  interface Window {
    provider: ethers.providers.JsonRpcProvider;
    betdeexInst: BetdeexInterface;
    ethereum: ethers.providers.ExternalProvider;
    BetdeexInst: Betdeex;
    BetInst: Bet;
  }
}