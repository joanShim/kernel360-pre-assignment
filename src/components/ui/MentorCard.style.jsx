import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-width: 328px;
  padding: 24px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
export const Job = styled.span`
  color: #54577a;
  font-size: 12px;
`;
export const Introduction = styled.p`
  font-size: 14px;
  color: #4a4d66;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #8e92bc;
  padding-top: 24px;
`;

export const StatsSection = styled.div`
  display: flex;
  gap: 16px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatIcon = styled.span`
  color: #8e92bc;
  display: flex;
  align-items: center;
`;

export const StatText = styled.span`
  font-size: 14px;
  color: #4a4d66;
`;
