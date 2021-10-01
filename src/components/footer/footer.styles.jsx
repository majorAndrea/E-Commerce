import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #343a40;
  color: white;
`;

export const DarkerBackground = styled.section`
  background-color: rgba(0, 0, 0, 0.3);
`;

export const SocialIconsContainer = styled.div`
  & svg {
    transition: color 0.25s;
  }
  & svg:hover,
  & svg:focus {
    cursor: pointer;
    color: rgba(255, 255, 255);
  }
`;
