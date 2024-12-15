import styled from "styled-components";

export const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 252px;
  height: 100%;
  min-height: calc(100vh - 108px);
  border-right: 1px solid #f5f5f7;
  padding: 32px;
  margin: 0;
`;

export const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  border-radius: 10px;
  color: #8e92bc;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f6f6f6;
    color: #333;
  }

  &.active {
    background-color: #f5f5f7;
    color: #141522;
  }
`;

export const MenuLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-size: 14px;
`;
