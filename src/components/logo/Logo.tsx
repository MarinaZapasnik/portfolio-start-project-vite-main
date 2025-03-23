import styled from "styled-components";
import { theme } from "../../styles/Theme";
import React from "react";



export const Logo: React.FC = () => {
  return (
    <StyledLogo>Marina Zapasnik</StyledLogo>
  );
};

const StyledLogo = styled.span`
  font-family: "Comfortaa", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.headLine};
  margin: 15px 0;
`

