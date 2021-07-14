import { createContext, useState } from "react";
import Cookies from "js-cookie";
import web3, { connectWalletProvider, connectWalletWeb3 } from "ethereum/web3";
import { web3Service } from "ethereum/web3Service";
import { chainList } from "common";
let EthProvider = (window as any).ethereum;

export const WalletContext = createContext<any>(null);

export default function WalletProvider(props) {
  const [isConnected, toggleConnected] = useState<boolean>(() => {
    let _cache = Cookies.get("isConnected");
    return _cache ? _cache : false;
  });
  const [isConnecting, toggleConnecting] = useState<boolean>(false);
  const [connectedAccount, setConnectedAccount] = useState<string>();
  const [selectedChain, setSelectedChain] = useState<any>(() => {
    let _cookie = Cookies.get("selectedChain");
    return _cookie
      ? chainList.find((list) => list.id === _cookie)
      : chainList[0];
  });
  const [walletProvider, setWalletProvider] = useState({
    currentProvider: web3,
    provider: EthProvider,
  });

  const metamaskEventHandler = (provider: any) => {
    provider.on("chainChanged", (chainId: any) => {
      window.location.reload();
    });
    provider.on("accountsChanged", function (accounts: string) {
      setConnectedAccount(accounts[0]);
    });
    provider.on("message", (message: any) => {
      console.log(message);
    });
    provider.on("disconnect", (code: number, reason: string) => {});
  };

  const getAccountBalance = async (
    selectedAccount: string,
    currentProvider: any,
    networkId?: any
  ) => {
    try {
      let balance: any;
      if (networkId && networkId === 2) {
        balance = await (window as any).BinanceChain.request({
          method: "eth_getBalance",
          params: [selectedAccount, "latest"],
        });
      } else {
        balance = await web3Service.getBalance(selectedAccount);
        if (currentProvider === connectWalletWeb3) {
          balance = await currentProvider.eth.getBalance(selectedAccount);
        }
      }
      let ethBal = web3Service.getWei(balance, "ether");

      // let ethBalDeci = toFixed(parseFloat(ethBal), 3);
    } catch (e) {}
  };

  const handleMetamask = (accounts: any, currentProvider: any) => {
    console.log("handling");
    if (
      window &&
      !(window as any).ethereum.selectedAddress &&
      accounts.length <= 0
    ) {
      (window as any).ethereum
        .enable()
        .then(() => {
          web3Service
            .getAccounts()
            .then((res: any) => {
              setConnectedAccount(res[0]);
              getAccountBalance(res[0], currentProvider);
              metamaskEventHandler((window as any).ethereum);
              toggleConnecting(false);
            })
            .catch((e: any) => {
              console.log(e);
              toggleConnecting(false);
              toggleConnected(false);
            });
        })
        .catch((e: any) => {
          toggleConnecting(false);
        });
    } else {
      setConnectedAccount(accounts[0]);

      getAccountBalance(accounts[0], currentProvider);

      metamaskEventHandler((window as any).ethereum);
      toggleConnecting(false);
    }
  };

  const handleConnect = (wallet: any) => {
    console.log("wallet", wallet);
    toggleConnecting(true);
    Cookies.set("wallet", wallet);
    try {
      if (wallet) {
        let currentProvider: any;
        let provider: any;
        switch (wallet.walletName) {
          case "Metamask":
            currentProvider = web3;
            provider = EthProvider;
            break;
          case "walletConnect":
            currentProvider = connectWalletWeb3;
            provider = connectWalletProvider;
            break;
          default:
            currentProvider = web3;
            provider = EthProvider;
        }
        handleWallet(currentProvider, wallet);
      }
    } catch (e) {
      toggleConnecting(false);
    }
    console.log(wallet);
  };

  const handleWallet = async (provider: any, selectedWallet: any) => {
    let accounts;
    switch (selectedWallet.walletName) {
      case "Metamask":
        // if (1) {
        accounts = await web3Service.getAccounts();
        console.log("accounts", accounts);
        handleMetamask(accounts, provider);
        // }
        break;
      case "WalletConnect":
        try {
          let provider: any = connectWalletProvider;
          await provider.enable().then((response: any) => {
            metamaskEventHandler(connectWalletProvider);
          });
          await connectWalletWeb3.eth.getAccounts().then((res: any) => {
            setConnectedAccount(res[0]);
          });
        } catch (e) {
          console.log(e);
          toggleConnecting(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        isConnecting,
        connectedAccount,
        handleConnect,
        selectedChain,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
}
