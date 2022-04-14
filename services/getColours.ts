import { basicColors, specialColors } from "../resources/themes";

const randomBasic = (Math.floor(Math.random() * (4)))
const randomSpecial = (Math.floor(Math.random() * (14)))

// * Chance for primary colour to be special
// * (primary colour subs zero bits)
const chanceAtPrimarySpecial = (Math.floor(Math.random() * (100)))
const primarySpecial = (chanceAtPrimarySpecial > 98)

const chanceAtSecondarySpecial = (Math.floor(Math.random() * (100)))
const secondarySpecial = (chanceAtSecondarySpecial > 78)



export const getColours = () => {
    const primary = (primarySpecial ? specialColors[randomSpecial] : basicColors[randomBasic])

    let specialColors2 = [...specialColors]
    let basicColors2 = [...basicColors]
    if (primarySpecial) {
        
    }
    const secondary = (secondarySpecial ? specialColors2[randomSpecial] : basicColors2[randomBasic])

    return {primary, secondary, terniary}
}