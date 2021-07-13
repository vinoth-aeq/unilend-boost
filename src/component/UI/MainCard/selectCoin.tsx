import { FC,useState } from "react";
import { Button } from "react-bootstrap";
import SelectCoinModal from "../modal/selectCoinModal";

const SelectCoin: FC = (props) => {
  const [showCoinModal, setShowCoinModal] = useState(false);

  return (
    <>
      <div className={`selectCoin`}>
        <Button className="switch-btn" onClick={() => setShowCoinModal(true)}>Select Coin</Button>
        <div></div>
        <div className="liquidity">Liquidity: 00.00</div>
      </div>
      <SelectCoinModal show={showCoinModal}
        onHide={() => setShowCoinModal(false)}/>
    </>
  );
};

export default SelectCoin;
