import "./App.css";
// import { useWeb3Context } from "web3-react";
import ConnectButton from "components/Button/Connect";
import { useErc677Contract } from "hooks/useContract";
import WalletConnector from "components/WalletConnector.js";

function App() {
  const c1 = useErc677Contract();
  const c2 = useErc677Contract();
  console.log("c2:", c2);
  const isSame = c1 === c2;
  console.log("isSame:", isSame);
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
}

export default App;
