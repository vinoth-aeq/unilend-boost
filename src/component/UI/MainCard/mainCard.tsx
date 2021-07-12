import { FC } from "react";
import { Card } from "react-bootstrap";

import SelectDex from "./selectDex";

const MainCard: FC = (props) => {
  return (
    <Card className={`paper`}>
      <Card.Body className={`custom-card-body`}>
        <Card className={`custom-card`}>
          <Card.Body>
            <SelectDex />
          </Card.Body>
        </Card>
        <Card className={`custom-card`}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card className={`custom-card`}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default MainCard;
