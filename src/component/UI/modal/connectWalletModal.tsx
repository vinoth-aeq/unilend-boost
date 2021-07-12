import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import MetamaskLogo from 'assets/metamask.svg';
import { Modal, Button } from "react-bootstrap";
import "./index.scss";
import '../../../theme.scss';

const ConnectWalletModal = (props) => {
  const data: any = useContext(ThemeContext);
   
  return (
    <div className={`App ${data.dark}`} >
      <Modal  {...props} centered size='md' >
        <Modal.Body className="custom-modalBody">
        <Button className="custom-modal-btn" ><img src={MetamaskLogo} className="metamask-logo"/>Metamask</Button>

        <Button className="custom-modal-btn" >WalletConnect</Button>

        </Modal.Body>
      </Modal>
   </div>
  );
};
export default ConnectWalletModal;
