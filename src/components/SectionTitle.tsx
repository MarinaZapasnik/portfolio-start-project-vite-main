import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
    color: ${theme.colors.headLine};
    margin-bottom: 85px;
    
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -4px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 50px;
    
    
  }
    ` 