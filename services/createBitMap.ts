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

export const parseIntoBytes = (wallet) => {
  let matrix = [];
  let bytes = [];
  wallet = wallet.split("")
  wallet.forEach((char) => matrix.push(char.charCodeAt(0).toString(2).split(""))); // * generates byte code from wallet address
  matrix.forEach((byte) => bytes.push(alignToByte(byte)))
  return bytes;
};

export const generateBitMap = (bytes) => {
// * This function takes bytes from ETH wallet address and
// * generates an array with 2 bytes in each row
    let bitMap = [];
    // takes 2 bytes and pushes them into a single row in bitMap
    for (let i = 0; i < bytes.length - 1; i += 2) {
        let row = [...bytes[i], ...bytes[i + 1]]
        bitMap.push(row)
    }
    return bitMap
}