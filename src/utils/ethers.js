import { ethers } from "ethers";

export const ether = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
export const max = ethers.constants.MaxUint256;

export const toEther = (amount) => ethers.utils.parseEther(amount || "0");
export const fromEther = (amount) => ethers.utils.formatEther(amount || "0");

export const strToBN = (amount) => ethers.BigNumber.from(amount || "0");

export const toUnits = (amount, decimals) =>
  ethers.utils.parseUnits(amount, decimals);

export const fromUnits = (amount, decimals) =>
  ethers.utils.formatUnits(amount, decimals);

export function isAddress(value) {
  try {
    return ethers.utils.getAddress(value.toLowerCase());
  } catch {
    return false;
  }
}
