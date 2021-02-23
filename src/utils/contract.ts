import { Contract, ethers } from "ethers";
import { isAddress } from "./ethers";

export function getProviderOrSigner(library: any, account: string | null | undefined) {
  return account ? library.getSigner(account).connectUnchecked() : library;
}

export function getContract(address: string , ABI: any, library: any, account: string | null | undefined): Contract | null {
  if (!isAddress(address) || address === ethers.constants.AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (!library) return null
  return new ethers.Contract(
    address,
    ABI,
    getProviderOrSigner(library, account)
  );
}

export function getReadContract(address: string, ABI: any, library: any): Contract {
  if (!isAddress(address) || address === ethers.constants.AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new ethers.Contract(address, ABI, library);
}
