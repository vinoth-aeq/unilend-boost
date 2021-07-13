import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import { Modal } from "react-bootstrap";
import "./dexModel.scss";

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
          <Modal.Title>Select Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal">
          <p>hello</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectCoinModal;
