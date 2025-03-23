import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonPropsType = {
    borderRadius?:string
    padding?:string
    width?:string
    height?:string
    background?:string
    border?:string
    hoverBorder?:string
    hoverWidth?:string
    hoverBackground?:string

}

export const Button = styled.button<ButtonPropsType>`
    border-radius: ${props => props.borderRadius || '8px'};
    padding: ${props => props.padding || '8px 25px'};
    width: ${props => props.width || '115px'};
    height: ${props => props.height || '45px'};
    background: ${props => props.borderRadius || '#fdc435'};
    border: ${props => props.border || 'none'};
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: ${theme.colors.headLine};

    &:hover {
        border: ${props => props.hoverBorder || '2px solid #25282b'};
        width: ${props => props.hoverWidth || '115px'};
        background: ${props => props.hoverBackground || 'none'};
        
    }
`
