import React from "react";
import { displayEllipsedAddress } from "utils";
import { useWeb3Context } from "web3-react";

const Button: React.FC = () =>{
  const context = useWeb3Context();
  const isWrongNetwork =
    context.error && context.error.message.includes("Unsupported Network");

  const walletButtonText =
    displayEllipsedAddress(context.account) || "Connect wallet";

  const handleConnectWallet = () => context.setConnector("Injected");

  return (
    <>
      <p className="text-white">
        {"network: " + process.env.REACT_APP_NETWORK_ID}
      </p>
      <p className="text-white">{context.error && context.error.message}</p>
      <button className="connect" type="button" onClick={handleConnectWallet}>
        <span>{isWrongNetwork ? "Wrong Network" : walletButtonText}</span>
      </button>
    </>
  );
}

export default Button