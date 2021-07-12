import { FC } from "react";
import { Card } from "react-bootstrap";
import SelectCoin from "./selectCoin";

import SelectDex from "./selectDex";
import TransactionCard from "./transactionCard";

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
          <Card.Body>
            <SelectCoin />
          </Card.Body>
        </Card>
        <Card className={`custom-card`}>
          <Card.Body>
            <TransactionCard />
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default MainCard;
