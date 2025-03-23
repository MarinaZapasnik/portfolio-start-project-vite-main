import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  
  display: flex;
  flex-direction: column;
  gap: 35px;
  position: relative;
  padding-bottom: 250px;

  @media (max-width: 1230px) {
      
      padding-bottom: 200px;
      
      
      
    } 
  
`;

const CopyRight = styled.small`
 
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.paragraph};
`;

const BackGroundSvg = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  
  width: 100vw;

  height: auto;
  display: flex;

  overflow: hidden;
  justify-content: center; 
  align-items: flex-end;

  svg {
    width: 100%; /* SVG растягивается на всю ширину родителя */
    height: auto; /* Пропорциональность сохраняется */
    
    
  }

  


  `;


export const S = {
    Footer,
    CopyRight,
    BackGroundSvg,
}