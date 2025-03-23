import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: ${theme.colors.paragraph};
  padding-right: 20px;
  word-wrap: break-word;
  text-align: start;

  @media ${theme.media.mobile} {
    padding-right: 0;
    
    
  }
  
`;