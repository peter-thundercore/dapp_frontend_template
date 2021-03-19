import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useWeb3Context } from "web3-react";
import { isMobile } from "react-device-detect";

interface IProps {
  children: React.ReactNode
}

const WalletConnector = ({ children }: IProps) => {
  const { setConnector, active } = useWeb3Context();

  function tryToSetConnector(setConnector: Function) {
    setConnector("Injected", {
      suppressAndThrowErrors: true,
    }).catch((error: Error) => {
      console.log('error:', error)
      setConnector("Network");
    });
  }

  useEffect(() => {
    if (!active) {
      if (window.ethereum) {
        if (isMobile) {
          tryToSetConnector(setConnector);
        } else {
          const library = new ethers.providers.Web3Provider(
            window.ethereum, "any"
          );
          library.listAccounts().then((accounts) => {
            if (accounts.length >= 1) {
              tryToSetConnector(setConnector);
            } else {
              setConnector("Network");
            }
          });
        }
      } else {
        setConnector("Network");
      }
    }
  }, [active, setConnector]);

  return <>{children}</>;
}

WalletConnector.propTypes = {};

export default WalletConnector;
