import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Contacts = styled.section`
    
    position: relative;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
    
`

const Slogan = styled.h3`
    ${font({
        weight: 700,
        Fmax: 20,
        Fmin: 14,
        
    })}

    
    /* font-weight: 700;
    font-size: 20px; */
    text-transform: uppercase;
    color: ${theme.colors.headLine};
    padding: 85px 0;
    max-width: 500px;


`
export const S = {
    Contacts,
    Slogan,
}