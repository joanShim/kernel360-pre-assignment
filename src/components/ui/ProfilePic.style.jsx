import styled from "styled-components";

export const ProfilePicWrapper = styled.div`
  width: ${({ size }) => size || "52px"};
  height: ${({ size }) => size || "52px"};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfilePicImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
