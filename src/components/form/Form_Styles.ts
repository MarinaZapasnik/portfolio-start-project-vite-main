import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Form = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-end;

    textarea {
        resize: none;
        height: 160px;
    }
    
`
const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%
`

const Label = styled.label`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.headLine};
`
const Field = styled.input`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    background: ${theme.colors.secondaryBg};
    
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: ${theme.colors.headLine};

    &:focus-visible {
        outline: 1px solid ${theme.colors.headLine};
    }
    
`

export const S = {
    Form,
    FieldWrapper,
    Field,
    Label,
}