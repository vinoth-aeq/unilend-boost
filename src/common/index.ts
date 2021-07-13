import MetamaskLogo from "assets/metamask.svg";
import ConnectWalletLogo from "assets/walletconnect-logo.svg";
import EthereumLogo from "assets/ethereumLogo.svg";
import BinanceLogo from "assets/binance.svg";
import PolygonLogo from "assets/polygonmaticLogo.svg";

export const walletList = (chain: any) => {
  return [
    {
      id: 1,
      walletName: "Metamask",
      logo: MetamaskLogo,
    },
    {
      id: 2,
      walletName: "WalletConnect",
      logo: ConnectWalletLogo,
    },
  ];
};

export const chainList = [
  {
    id: 1,
    name: "Ethereum",
    logo: EthereumLogo,
  },
  {
    id: 2,
    name: "Binance",
    logo: BinanceLogo,
  },
  {
    id: 3,
    name: "Polygon",
    logo: PolygonLogo,
  },
];
