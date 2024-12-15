import { useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";
import * as S from "./SideMenu.style";
export default function SideMenu() {
  const { pathname } = useLocation();
  return (
    <S.SideMenu>
      {MENU_ITEMS.map((item) => (
        <S.MenuItem key={item.id}>
          <S.MenuLink
            to={item.path}
            className={pathname === item.path ? "active" : ""}
          >
            {item.icon}
            <S.MenuLabel>{item.label}</S.MenuLabel>
          </S.MenuLink>
        </S.MenuItem>
      ))}
    </S.SideMenu>
  );
}
