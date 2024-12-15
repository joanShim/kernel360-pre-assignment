import { useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";
import * as S from "./SideMenu.style";
export default function SideMenu() {
  const navigate = useNavigate();
  const handleClick = (path, disabled) => (e) => {
    e.preventDefault();

    if (disabled) {
      alert("준비중입니다.");
      return;
    }

    navigate(path);
  };
  return (
    <S.SideMenu>
      {MENU_ITEMS.map((item) => (
        <S.MenuItem
          key={item.id}
          onClick={handleClick(item.path, item.disabled)}
          $disabled={item.disabled}
        >
          {item.icon}
          <S.MenuLabel>{item.label}</S.MenuLabel>
        </S.MenuItem>
      ))}
    </S.SideMenu>
  );
}
