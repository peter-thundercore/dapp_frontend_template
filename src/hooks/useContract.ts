import { useMemo } from "react";
import { useWeb3Context } from "web3-react";
import { getContract } from "utils/contract";
import { AbiItem } from 'web3-utils'
import {parseEnv} from 'utils'
import { exampleContractAddresses } from "constants/index";
import erc677 from "constants/abis/erc677.json";

function useContract(address: string, abi: AbiItem) {
  const { library, account } = useWeb3Context();
  try {
    return useMemo(() => getContract(address, abi, library, account), [
      library,
      address,
    ]);
  } catch (error) {
    console.error("Failed to get contract", error);
    return null;
  }
}

export function useERC677Contract(address?: string) {
  const networkID = parseEnv("REACT_APP_NETWORK_ID", "108") 
  const erc677Abi = (erc677 as unknown) as AbiItem
  return useContract(
    address || exampleContractAddresses[networkID],
    erc677Abi
  );
}
