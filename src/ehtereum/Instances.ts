import { ethers } from 'ethers';
import { BetdeexFactory } from './Typechain/BetdeexFactory';
import { DayswapperFactory } from './Typechain/DayswapperFactory';
import { BetinterfaceFactory } from './Typechain/BetinterfaceFactory';




const nodeUrl = process.env.REACT_APP_NODE_URL || 'https://node2.testnet.eraswap.network/';

export const addresses = {
    Betdeex:
      process.env.REACT_APP_BETDEEX_ADDRESS ||
      '0xD9295D0c63e99d16Ee1D38046316e4cf233E1211',

      dayswapper:
      process.env.REACT_APP_FAITHMINUS_ADDRESS ||
      '',
      kycDapp:
      process.env.REACT_APP_KYCDAPP_ADDRESS || '0x2c3B31e797575d7705B11424c9Bb66e6B599bf01',
    timeallyManager: '0x89309551Fb7AbaaB85867ACa60404CDA649751d4',
  };

  export const providerESN = new ethers.providers.JsonRpcProvider(nodeUrl);


  export const BetdeexInst = BetdeexFactory.connect(addresses.Betdeex, providerESN);

  export const daySwapperInst = DayswapperFactory.connect(addresses.dayswapper, providerESN);

  export const betInterfaceInst = BetinterfaceFactory.connect(addresses.kycDapp, providerESN);




  //@ts-ignore
window.providerESN = new ethers.providers.JsonRpcProvider(nodeUrl);

//@ts-ignore
window.BetdeexInst = BetdeexFactory.connect(addresses.Betdeex, providerESN);

//@ts-ignore
window.dayswapperInst = DayswapperFactory.connect(addresses.dayswapper, providerESN);


