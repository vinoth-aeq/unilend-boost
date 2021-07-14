import { FC,useState } from "react";
import { Button } from "react-bootstrap";
import SelectCoinModal from "../modal/selectCoinModal";
import { coinList } from "common";

const SelectCoin: FC = (props) => {
  const [showCoinModal, setShowCoinModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<any>();

  const handleCoinChange = (id: number) => {
    setSelectedCoin(coinList.find((item) => item.id === id));
    setShowCoinModal(false);
  };
  return (
    <>
      <div className={`selectCoin`}>
        <Button className="switch-btn" onClick={() => setShowCoinModal(true)}>
        {selectedCoin ? selectedCoin.name : "Select Coin"}
          </Button>
        <div></div>
        <div className="liquidity">Liquidity: 00.00</div>
      </div>
      <SelectCoinModal 
      show={showCoinModal}
        onHide={() => setShowCoinModal(false)}
        handleCoinChange={(id) => handleCoinChange(id)}/>
    </>
  );
};

export default SelectCoin;
