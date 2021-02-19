import { useMemo } from "react";
import { useWeb3Context } from "web3-react";
import { getContract } from "utils/contract";
import { exampleContractAddresses } from "constants/index";
import Erc677Abi from "constants/abis/erc677";

function useContract(address, abi) {
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

export function useErc677Contract(address) {
  return useContract(
    address || exampleContractAddresses[process.env.REACT_APP_NETWORK_ID],
    Erc677Abi
  );
}
