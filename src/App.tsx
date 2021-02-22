import "./App.css";
// import { useWeb3Context } from "web3-react";
import ConnectButton from "components/Button/Connect";
import { useErc677Contract } from "hooks/useContract";
import WalletConnector from "components/WalletConnector";

const App: React.FC = () => {
  const c1 = useErc677Contract();
  const c2 = useErc677Contract();
  return (
    <WalletConnector>
      <div className="App">
        <main className="App-header">
          <ConnectButton />
          <h1>My new DAPP</h1>
        </main>
      </div>
    </WalletConnector>
  );
};

export default App;
