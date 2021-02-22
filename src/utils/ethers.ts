import { ethers } from "ethers";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";

export const ether = ethers.BigNumber.from("10").pow(
  ethers.BigNumber.from("18")
);
export const max = ethers.constants.MaxUint256;

export const toEther = (amount: string) :BigNumber => ethers.utils.parseEther(amount || "0");
export const fromEther = (amount: BigNumberish) :string => ethers.utils.formatEther(amount || "0");

export const strToBN = (amount: string): BigNumber => ethers.BigNumber.from(amount || "0");

export const toUnits = (amount: string, decimals: BigNumberish): BigNumber =>
  ethers.utils.parseUnits(amount, decimals);

export const fromUnits = (amount: BigNumberish, decimals: string | BigNumberish): string =>
  ethers.utils.formatUnits(amount, decimals);

export function isAddress(value: string): boolean {
  try {
    return !!ethers.utils.getAddress(value.toLowerCase());
  } catch {
    return false;
  }
}
