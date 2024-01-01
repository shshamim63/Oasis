import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../hooks/useDarkMode";

function DarkModeToggle() {
  const { isDarkMode, toogleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toogleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
