import styled from "styled-components";

export const Notification = styled.div`
  border: 1px solid #e0e0e0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background-color: #eee;
  }
`;

export const Badge = styled.span`
  background-color: #ff4d5e;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 14px;
`;
