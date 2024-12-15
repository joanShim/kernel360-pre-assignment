import styled from "styled-components";

export default function FollowButton({ isFollowed }) {
  return (
    <StyledButton $isFollowed={isFollowed}>
      {isFollowed ? "Followed" : "+ Follow"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;
`;
