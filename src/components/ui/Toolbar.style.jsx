import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Toolbar = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
`;
export const SearchBar = styled.input`
  border-radius: 10px;
  border: 1px solid ${theme.colors.borderColor};
  padding: 14px 28px;
  width: 480px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
export const ToolButton = styled.button`
  border-radius: 10px;
  border: 1px solid ${theme.colors.borderColor};
  background-color: #fff;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
