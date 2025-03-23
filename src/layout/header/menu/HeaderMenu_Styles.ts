import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";


 const MobileMenu = styled.nav`
`;

 const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
    background-color: rgba(249 250 255 / 90%);
    display: none;
    backdrop-filter: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        
    `}


    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
  
`

 const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 13px;
    right: 13px;
    width: 36px;
    height: 36px;
    z-index: 99999999;

    span {
        display: block;
        width: 26px;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.headLine} ;
        position: absolute;
        left: 5px;
        bottom: 17px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
    
`}

    &::before {
        content: "";
        display: block;
        width: 26px;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.headLine} ;
        position: absolute;
        transform: translateY(-6px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
        
 
`}

    }
    &::after {
        content: "";
        display: block;
        width: 26px;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.headLine} ;
        position: absolute;
        transform: translateY(6px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        
 
`}

    

    }
  }
`

const DesctopMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
  }

 
`;

export const S = {
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesctopMenu
}


