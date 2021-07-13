import React, { useContext, useState } from "react";
import { ThemeContext } from "context/themeContext";
import VectorImg from "assets/Vector.svg";
import { Modal, Row, FormControl } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./dexModel.scss";

const SelectDexModal = (props) => {
  const data: any = useContext(ThemeContext);

  return (
    <div>
      <Modal className={`model-switch-${data.theme}`} {...props} centered>
        <Modal.Header
          className="custom-coin-modal"
          style={{ borderBottom: "0" }}
        >
          <FormControl className= "custom-search" type="text" placeholder="Search Dex" />
        
        </Modal.Header>
        <Modal.Body className="custom-row-body">
          <Row className="custom-row">
            <div className="list-col">
              <img src={VectorImg} />
              Zeroswap
            </div>
            <div className="list-col">
              <img src={VectorImg} />
              Zeroswap
            </div>
            <div className="list-col">
              <img src={VectorImg} />
              Zeroswap
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectDexModal;
