// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object
import { parseIntoBits } from './createBitMap'

export const generateWalleticon = (walletBits) => {
  // pass
};

export const getWalleticon = (wallet) => {
  const walletBits = parseIntoBits(wallet);
  // TODO: const walleticon = generateWalleticon(matrix)
  return walletBits;
};


