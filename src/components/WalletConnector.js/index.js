import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3Context } from "web3-react";
import { isMobile } from "react-device-detect";

function WalletConnector({ children }) {
  const { setConnector, active } = useWeb3Context();

  function tryToSetConnector(setConnector) {
    setConnector("Injected", {
      suppressAndThrowErrors: true,
    }).catch((error) => {
      setConnector("Network");
    });
  }

  useEffect(() => {
    if (!active) {
      if (window.ethereum || window.web3) {
        if (isMobile) {
          tryToSetConnector(setConnector);
        } else {
          const library = new ethers.providers.Web3Provider(
            window.ethereum || window.web3
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

  return children;
}

WalletConnector.propTypes = {};

export default WalletConnector;
