import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-top: 12px;
  gap: 24px;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE and Edge
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
`;

export const CarouselItem = styled.div`
  min-width: 300px;
  flex: 0 0 auto; 
`;
