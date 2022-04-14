// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object
import { parseIntoBytes, generateBitMap } from './createBitMap'

export const generateWalleticon = (walletBits) => {
  // pass
};

export const getWalleticon = (wallet) => {
  const walletBits = parseIntoBytes(wallet);
  const bitMap = generateBitMap(walletBits);
  // TODO: const {primary, secondary, ?terniary} = getColours()
  // TODO: const walleticon = generateWalleticon(matrix)
  return walletBits;
};


