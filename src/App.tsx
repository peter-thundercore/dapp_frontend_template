import {useEffect, useState} from 'react'
import "./App.css";
import ConnectButton from "components/Button/Connect";
import { useERC677Contract } from "hooks/useContract";
import WalletConnector from "components/WalletConnector";
import { useWeb3Context } from 'web3-react';
import { fromUnits } from 'utils/ethers';

const App: React.FC = () => {
  const {account} = useWeb3Context()
  const token1 = useERC677Contract();
  const [token, settoken] = useState({
    name: "",
    balance: "",
    decimals: ""
  })

  useEffect(() => {
    const getTokenBalance = async () => {
      if (token1 && account) {
        const name = (await token1.name()) as string
        const dec = await token1.decimals()
        const decimals = dec.toString()
        const balance = (await token1.balanceOf(account)) as string
        settoken({name, balance, decimals})
      }
    }
    getTokenBalance()
  }, [token1, account])
  
  return (
    <WalletConnector>
      <div className="App">
        <main className="App-header">
          <ConnectButton />
          <h1>My new DAPP</h1>
          <p>{token.name}</p>
          {
            token.balance && token.decimals &&
          <p>Balance: { fromUnits(token.balance.toString(), token.decimals)}</p>
          }
        </main>
      </div>
    </WalletConnector>
  );
};

export default App;
