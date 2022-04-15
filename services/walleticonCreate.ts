// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object
import { parseIntoBytes, generateBitMap } from './createBitMap'
import getColours from './getColours';
import getColoursMatrix from './getColorsMatrix'

export const generateWalleticon = (walletBits) => {
  // pass
};

export const getWalleticon = (wallet) => {
  const walletBits = parseIntoBytes(wallet);
  const bitMap = generateBitMap(walletBits);
  const { primary, secondary, terniary } = getColours
  const matrix = getColoursMatrix(primary, secondary, terniary, bitMap)
  // TODO: const walleticon = generateWalleticon(matrix)
  return walletBits;
};


