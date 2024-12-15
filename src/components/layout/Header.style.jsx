import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Header = styled.header`
  height: ${theme.layout.headerHeight};
  display: flex;
  padding: 0 48px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f7;
`;
export const Logo = styled.img`
  width: 200px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 24px;
`;
