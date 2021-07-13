import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";

import { Modal, Row, Col } from "react-bootstrap";
import "./index.scss";
import { chainList } from "common";

const SelectChainModal = (props) => {
  const data: any = useContext(ThemeContext);

  return (
    <div>
      <Modal className={`model-switch-${data.theme}`} {...props} centered>
        <Modal.Header style={{ borderBottom: "0" }}>
          <Modal.Title className="selectchain-title">Select Chain</Modal.Title>
          {/* <div >X</div> */}
        </Modal.Header>
        <Modal.Body className="custom-selectchain-body">
          {chainList.map((list) => (
            <div className="selectchain-list">
              <img alt="Logo" src={list.logo} className="network-logo" />
              <span className="network-title">{list.name}</span>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectChainModal;
