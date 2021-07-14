import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import { Modal, FormControl } from "react-bootstrap";
import "./coinModel.scss";

const SelectCoinModal = (props) => {
  const data: any = useContext(ThemeContext);

  return (
    <div>
      <Modal
        size="xl"
        className={`modal-coin-${data.theme}`}
        {...props}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "0" }}>
          <Modal.Title>
            <FormControl
              className="custom-coin-search"
              type="text"
              placeholder="Search by name or address"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-coin-body">
          <div className="selectcoin-list">
            <div>
              <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
            </div>
            <div>
              <span>$20.59</span>
            </div>
          </div>

          <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
            <div>
              <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
            </div>
            <div>
              <span>$20.59</span>
            </div>
          </div>

          <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
            <div>
              <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
            </div>
            <div>
              <span>$20.59</span>
            </div>
          </div>

          <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
            <div>
              <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">ETH</span>
            </div>
            <div>
              <span>$20.59</span>
            </div>
          </div>

          <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">name</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">name</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
            <div>
              <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">name</span>
            </div>
            <div>
              <span>$20.59</span>
            </div>
          </div>

          <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">name</span>
          </div>
             <div><span>$20.59</span></div>
            </div>

            <div className="selectcoin-list">
          <div>
          <img alt="Logo" src={EthereumLogo} className="coin-logo" />
              <span className="coin-title">name</span>
          </div>
             <div><span>$20.59</span></div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectCoinModal;
