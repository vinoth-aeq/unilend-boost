import { ThemeContext } from "context/themeContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import {
  RightArrow,
  RightArrowDark,
  SettingIcon,
  SettingIconDark,
  unilendLogo,
} from "utils/asserts";

const SelectDex = () => {
  const data: any = useContext(ThemeContext);
  return (
    <>
      <div className={`settings`}>
        <img
          src={data.theme === "dark" ? SettingIconDark : SettingIcon}
          alt=""
        />
      </div>
      <div className={`selectDex`}>
        <Button className="switch-btn">
          <img src={unilendLogo} alt="" />
          Unilend
        </Button>
        <img
          src={data.theme === "light" ? RightArrowDark : RightArrow}
          alt=""
          height="20px"
        />
        <Button className="switch-btn">Select DEX</Button>
      </div>
    </>
  );
};

export default SelectDex;
