import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const SkillsWrapper = styled(FlexWrapper)`
    
    justify-content: center;
    flex-wrap: wrap;
    gap: 90px;
    position: relative;
    background-color: ${theme.colors.primaryBg};

    @media ${theme.media.tablet} {
      gap: 60px;
    }
  `

  
const Skill = styled.div`
width: 130px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

@media ${theme.media.tablet} {
    max-width: 115px;
}

@media ${theme.media.minimobile} {
    max-width: 100px;
}


`

const SkillTitle = styled.h3`
${font({
    weight: 700,
    Fmax: 20,
    Fmin: 15,
    color: '${theme.colors.mainText}',
})}

text-align: center;

/* font-weight: 700;
font-size: 20px;
text-transform: uppercase;
color: ${theme.colors.mainText}; */


/* @media ${theme.media.mobile} {
    font-size: 15px
} */


`

  export const S = {
    SkillsWrapper,
    Skill,
    SkillTitle,
  }

