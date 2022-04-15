// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object
import { parseIntoBytes, generateBitMap } from './createBitMap'
import getColours from './getColours';

export const generateWalleticon = (walletBits) => {
  // pass
};

export const getWalleticon = (wallet) => {
  const walletBits = parseIntoBytes(wallet);
  const bitMap = generateBitMap(walletBits);
  const {primary, secondary, terniary} = getColours
  // TODO: const walleticon = generateWalleticon(TBD)
  return walletBits;
};


