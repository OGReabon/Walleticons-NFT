import { parseIntoBits, generateWalleticon } from "./walleticonCreate";

const testResource = () => {
  const bits = "011000010010001100110011001001000111001101000000";
  const array = bits.split("");
  return array;
};

const result = testResource();

test("checks function parses into bits correctly", () => {
  expect(parseIntoBits("a#3$s@")).toBe(result);
});
