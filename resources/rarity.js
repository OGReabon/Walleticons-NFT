// * chance for primary color to be special is 0.25%
// * chance for secondary color in percentage
const secondaryColorChance = {
  none: 80,
  basic: 16,
  special: 4,
};

// * chance for terniary color in percentage, only applicable
// * when secondary color was applied
const terniaryColorChance = {
  none: 80,
  basic: 19,
  special: 1,
};

export default {
  secondaryColorChance,
  terniaryColorChance,
};
