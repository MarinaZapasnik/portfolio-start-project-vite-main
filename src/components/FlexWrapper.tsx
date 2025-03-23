import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    alignSelf?: string
    gap?: string
    wrap?: string
    flex?: string
    padding?: string

    
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    padding:  ${props => props.padding || '0'};
    
    
    flex-direction: ${props => props.direction || "row"};
    
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'normal'};
    align-self: ${props => props.alignSelf || 'auto'};;
    gap: ${props => props.gap || '0px'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    flex: ${props => props.flex || "none"};
    height: 100%;
    

    

  
  
`