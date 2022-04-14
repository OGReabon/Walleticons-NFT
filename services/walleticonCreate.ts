// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object

const alignTo2Bytes = (byte) => {
  let twoBytes = [];
  while (byte.length < 16) {
    byte.unshift('0')
  }
  byte.forEach((bit) => twoBytes.push(parseInt(bit,10)));
  return twoBytes
}

export const parseIntoBits = (wallet) => {
  let matrix = [];
  let bits = [];
  wallet = wallet.split("")
  wallet.forEach((char) => matrix.push(char.charCodeAt(0).toString(2).split(""))); // * generates byte code from wallet address
  matrix.forEach((byte) => bits.push(alignTo2Bytes(byte)))
  return bits;
};

export const generateWalleticon = (walletBits) => {
  // pass
};

export const getWalleticon = (wallet) => {
  const walletBits = parseIntoBits(wallet);
  // TODO: const walleticon = generateWalleticon(matrix)
  return walletBits;
};


