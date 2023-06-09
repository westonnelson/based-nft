import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";


export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
         Welcome to BASED and Non-Fungible Free NFT Mint!
        </h1>

        <p className="description">
         Get Started by connecting your wallet.
        </p>

        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center' }} />
        </div>

        <div className="grid">
          <a href="https://base.org/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Learn about the L2 Base
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
