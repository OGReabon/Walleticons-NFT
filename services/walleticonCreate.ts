// TODO: parse req.body ✅
// TODO: parse body into binary object ✅
// TODO: create image from binary object

const alignToByte = (byte) => {
  let newByte = [];
  // * There is no need to parse for 2 bytes as all characters from
  // * ETH wallet addresses are just lowercase and uppercase letters
  // * and numbers
    while (byte.length < 8) {
      byte.unshift('0')
  }
  byte.forEach((bit) => newByte.push(parseInt(bit,10)));
  return newByte
}

export const parseIntoBits = (wallet) => {
  let matrix = [];
  let bits = [];
  wallet = wallet.split("")
  wallet.forEach((char) => matrix.push(char.charCodeAt(0).toString(2).split(""))); // * generates byte code from wallet address
  matrix.forEach((byte) => bits.push(alignToByte(byte)))
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


