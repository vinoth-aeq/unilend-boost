import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import BinanceLogo from 'assets/binance.svg';
import PolygonLogic from 'assets/polygonmaticLogo.svg';
import { Modal, Row,Col } from "react-bootstrap";
import "./index.scss";

const SelectChainModal = (props) => {
  const data: any = useContext(ThemeContext);

  return (
    <div className={`App ${data.theme}`}>
      <Modal {...props} centered>
        <Modal.Header style={{ borderBottom: "0" }} >
          <Modal.Title className="selectchain-title">Select Chain</Modal.Title>
          {/* <div >X</div> */}
        </Modal.Header>
        <Modal.Body className="custom-selectchain-body">
            <div className="selectchain-list" > 
                <img alt="Logo" src={BinanceLogo} className="network-logo" />
                <span className="network-title">Binance</span>
            </div>

            <div className="selectchain-list" > 
            <img alt="Logo" src={EthereumLogo} className="network-logo" />
                <span className="network-title">Ethereum</span></div>

                <div className="selectchain-list" > 
            <img alt="Logo" src={PolygonLogic} className="network-logo" />
                <span className="network-title">Ploygon</span></div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectChainModal;
