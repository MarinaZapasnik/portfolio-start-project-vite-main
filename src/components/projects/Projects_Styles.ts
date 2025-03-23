import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme"

const ProjectsWrapper = styled(FlexWrapper)`
  
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 100%;
  background-color: ${theme.colors.primaryBg};
  position: relative;

    @media ${theme.media.tablet} {
      gap: 50px;
    }
  
` 

const Project = styled.div`
    display: flex;
    align-items: center;
    max-width: 990px;
    width: 100%;
    max-height: 525px;
    background-color: ${theme.colors.secondaryBg};
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    overflow: hidden;
    
    

    @media ${theme.media.tablet} {
       flex-direction: column;
       max-height: 700px;
       

    }

`
const DescriptionProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: start;
    justify-content: center;
    flex: 1;
    padding: 0 45px 0 45px;

    @media ${theme.media.tablet} {
        min-height: 350px;
    }
` 

const ProjectName = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    color: ${theme.colors.headLine};
`
const Image = styled.img`
    min-width: 50%;
    height: 525px;
    object-fit: cover;
    flex: 1;

    @media ${theme.media.tablet} {
       min-height: 350px;
       width: 100%;
       min-width: 100%;
       
       


    }
`

export const S = {
    ProjectsWrapper,
    Project,
    DescriptionProjectWrapper,
    ProjectName,
    Image,
    
}