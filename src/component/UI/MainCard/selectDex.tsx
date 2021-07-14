import { dexList } from "common";
import { ThemeContext } from "context/themeContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import {
  RightArrow,
  RightArrowDark,
  SettingIcon,
  SettingIconDark,
  unilendLogo,
} from "utils/asserts";
import SelectDexModal from "../modal/selectDexModal";

const SelectDex = () => {
  const data: any = useContext(ThemeContext);
  const [dexModalShow, setDexModalShow] = useState(false);
  const [selectedDex, setSelectedDex] = useState<any>();

  const handleDexChange = (id: number) => {
    setSelectedDex(dexList.find((item) => item.id === id));
    setDexModalShow(false);
  };

  return (
    <>
      <div className={`settings`}>
        <img
          src={data.theme === "dark" ? SettingIconDark : SettingIcon}
          alt=""
        />
      </div>
      <div className={`selectDex`}>
        <Button className="switch-btn selected">
          <img src={unilendLogo} alt="" />
          Unilend
        </Button>
        <img
          src={data.theme === "light" ? RightArrowDark : RightArrow}
          alt=""
          height="20px"
        />
        <Button className="switch-btn" onClick={() => setDexModalShow(true)}>
          {selectedDex ? selectedDex.name : "Select DEX"}
        </Button>
      </div>
      <SelectDexModal
        show={dexModalShow}
        onHide={() => setDexModalShow(false)}
        handleDexChange={(id) => handleDexChange(id)}
      />
    </>
  );
};

export default SelectDex;
