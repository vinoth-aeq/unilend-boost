import React, { useContext, useState } from "react";
import { ThemeContext } from "context/themeContext";
import VectorImg from "assets/Vector.svg";
import { Modal, Row, Col } from "react-bootstrap";
import options from "./dexData";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./dexModel.scss";

const SelectDexModal = (props) => {
  const data: any = useContext(ThemeContext);
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Modal className={`model-switch-${data.theme}`} {...props} centered>
        <Modal.Header
          className="custom-coin-modal"
          style={{ borderBottom: "0" }}
        >
          <Typeahead
            inputProps={{
              className: "custom-typehead",
            }}
            placeholder="Search DEX"
            onChange={setSelected}
            options={["one", "two"]}
            selected={selected}
          />
        </Modal.Header>
        <Modal.Body>
          <Row className="custom-row">
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
