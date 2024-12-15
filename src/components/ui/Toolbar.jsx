import { LayoutPanelLeft, ListFilter, Search } from "lucide-react";
import * as S from "./Toolbar.style";
export default function Toolbar() {
  return (
    <>
      <S.Toolbar>
        <S.SearchBar type="text" placeholder="Search Mentors" />

        <S.ButtonWrapper>
          <S.ToolButton>
            <LayoutPanelLeft size={24} />
            Category
          </S.ToolButton>
          <S.ToolButton>
            <ListFilter />
            Sort
          </S.ToolButton>
        </S.ButtonWrapper>
      </S.Toolbar>
    </>
  );
}
