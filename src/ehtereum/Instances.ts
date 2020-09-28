import { ethers } from 'ethers';
import { DayswapperFactory } from './Typechain/DayswapperFactory';
import { BetdeexFactory } from './Typechain/BetdeexFactory';
import { BetFactory } from './Typechain/BetFactory';




const nodeUrl = process.env.REACT_APP_NODE_URL || 'https://node2.testnet.eraswap.network/';

export const addresses = {
    Betdeex:
      process.env.REACT_APP_BETDEEX_ADDRESS ||
      '0x937f815dA0326AcEADCfCd78Ea29B9B22E93Dc71',

      Bet:
      process.env.REACT_APP_BET_ADDRESS ||
      '0xbF9F2C1C38BB485c4e18Dad1Ad85748876bE50be',
      kycDapp:
      process.env.REACT_APP_KYCDAPP_ADDRESS || '0x2c3B31e797575d7705B11424c9Bb66e6B599bf01',
    timeallyManager: '0x89309551Fb7AbaaB85867ACa60404CDA649751d4',
  };

  export const providerESN = new ethers.providers.JsonRpcProvider(nodeUrl);


  export const BetdeexInst = BetdeexFactory.connect(addresses.Betdeex, providerESN);

  export const BetInst = BetFactory.connect(addresses.Bet, providerESN);





  //@ts-ignore
window.providerESN = new ethers.providers.JsonRpcProvider(nodeUrl);

//@ts-ignore
window.BetdeexInst = BetdeexFactory.connect(addresses.Betdeex, providerESN);




