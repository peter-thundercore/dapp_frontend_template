import { isAddress } from "./ethers";

export const noByte = "0x";
export const emptyAddress = "0x0000000000000000000000000000000000000000";
export const userDeniedError = 4001;

export const displayEllipsedAddress = (address) => {
  if (!isAddress(address)) return "";
  return (
    address.slice(0, 6) +
    "..." +
    address.slice(address.length - 4, address.length)
  );
};
