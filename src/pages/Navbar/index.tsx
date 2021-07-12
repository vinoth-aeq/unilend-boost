import React, { useContext ,useState} from "react";
import Switch from "react-switch";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import UboostLogo from "../../assets/uLogo.svg";
import "./index.scss";
import { ThemeContext } from "context/themeContext";

const NavBar = () => {
  const data: any = useContext(ThemeContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={`App ${data.theme}`}>
      <div className="custom-container">
        <Row>
          <Navbar className="Navbar-css" collapseOnSelect expand="lg">
            <Col xs={12} sm={12} md={4} lg={4}>
              <Navbar.Brand className="header-css" href="#home">
                <img alt="Logo" src={UboostLogo} className="header-logo" />
                <span className="header-title">Uboost</span>
              </Navbar.Brand>
            </Col>

            <Col xs={12} sm={12} md={8} lg={8}>
              <Nav className="navLink-css">
                <Button variant="primary" className="header-btn-css">
                  Select Chain
                </Button>
                <Button className="header-btn-css">Connect wallet</Button>
                <Switch
                  checked={data.theme === "light" ? true : false}
                  onChange={data.handleToggleTheme}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#fff"
                  offColor="#215355"
                  onHandleColor="FED330"
                  offHandleColor="#071F21"
                  height={30}
                  width={55}
                  className="react-switch"
                />
              </Nav>
            </Col>
          </Navbar>
        </Row>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default NavBar;
