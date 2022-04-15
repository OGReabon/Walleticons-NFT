import { basicColors, specialColors } from "../resources/themes";

const randomColor = (colors) => { return (Math.floor(Math.random() * (colors.length))) }

// * Chance for primary colour to be special
// * (primary colour subs zero bits)
const chanceAtPrimarySpecial = (Math.floor(Math.random() * (100)))
const primarySpecial = (chanceAtPrimarySpecial > 98)

const chanceAtSecondarySpecial = (Math.floor(Math.random() * (100)))
const secondarySpecial = (chanceAtSecondarySpecial > 78)

const chanceAtTernirary = (Math.floor(Math.random() * (100)))
const isTernirary = (chanceAtTernirary > 98)

const chanceAtTerniarySpecial = (Math.floor(Math.random() * (100)))
const terniarySpecial = (chanceAtTerniarySpecial > 98)



const getColours = () => {
    const primary = (primarySpecial ? specialColors[randomColor(specialColors)] : basicColors[randomColor(basicColors)])

    // Following functionality removes color from array when used
    // to prevent reusing the same colour for the same user twice
    let specialColors2 = [...specialColors]
    let basicColors2 = [...basicColors]
    if (primarySpecial) {
        specialColors2.splice(specialColors.indexOf(primary))
    } else {
        basicColors2.splice(basicColors.indexOf(primary))
    }
    
    const secondary = (secondarySpecial ? specialColors2[randomColor(specialColors2)] : basicColors2[randomColor(basicColors2)])
    let specialColors3 = [...specialColors2]
    let basicColors3 = [...basicColors2]

    if (secondarySpecial) {
        specialColors3.splice(specialColors2.indexOf(secondary))
    } else {
        basicColors3.splice(basicColors2.indexOf(secondary))
    }

    let terniary

    if (isTernirary) {
        terniary = (terniarySpecial ? specialColors3[randomColor(specialColors3)] : basicColors3[randomColor(basicColors3)])
    } else {
        terniary = null
    }

    return {primary, secondary, terniary}
}

export default getColours()