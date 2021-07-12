import { FC } from "react";
import { Button } from "react-bootstrap";

const SelectCoin: FC = (props) => {
  return (
    <>
      <div className={`selectCoin`}>
        <Button className="switch-btn">Select Coin</Button>
        <div></div>
        <div className="liquidity">Liquidity: 00.00</div>
      </div>
    </>
  );
};

export default SelectCoin;
