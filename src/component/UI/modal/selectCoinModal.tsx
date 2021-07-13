import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import BinanceLogo from "assets/binance.svg";
import PolygonLogic from "assets/polygonmaticLogo.svg";
import { Modal, Row, Col } from "react-bootstrap";
import './dexModel.scss'

const SelectCoinModal = (props) => {
  const data: any = useContext(ThemeContext);

  return (
    <div>
      <Modal size="xl" className={`model-switch-${data.theme}`} 
         {...props} centered>
        <Modal.Header style={{ borderBottom: "0" }}>
          <Modal.Title >Select Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="modal">
         <p>hello</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectCoinModal;
