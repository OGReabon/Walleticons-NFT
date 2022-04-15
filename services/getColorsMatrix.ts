const bitPaint = (primary, secondary, terniary, bit) => {
    const chanceTerniary = (Math.floor(Math.random() * (2)))
    const positiveBit = (chanceTerniary > 0 ? terniary : secondary)
    const hexCode = ( bit === 0 ? primary : positiveBit)
    return hexCode
}

const getColoursMatrix = (primary, secondary, terniary, bitMap) => {
    let matrix = [...bitMap]

    matrix.forEach((byte) => byte.forEach((bit) => bitPaint(primary, secondary, terniary, bit)))

    return matrix
}

export default getColoursMatrix