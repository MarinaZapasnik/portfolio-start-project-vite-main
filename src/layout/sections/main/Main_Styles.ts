import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.main`

  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: hidden;
  background-color: ${theme.colors.primaryBg};
  
  
`;

const MainSectionWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1130px) {
    gap: 0;
    
  }

  @media ${theme.media.tablet} {
    flex-direction: column-reverse;
  }

 
`;

const MainTitle = styled.h1`
  padding-top: 110px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.accent};

  p {
    display: none;
  }

  @media ${theme.media.tablet} {
    padding-top: 50px;

  }
  
`;

const ContentWrapper = styled.div`
  padding-right: 90px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const Name = styled.h2`
    ${font({family: '"Roboto", sans-serif',
    weight: 700,
    Fmax: 64,
    Fmin: 42,
    lineHeight: '120%'
})}

  /* font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%; */
  color: ${theme.colors.mainText};

  /* @media ${theme.media.mobile} {
    font-size: 42px;
    
    
  } */
  
`;

const PhotoWrapper = styled.div`
  position: relative;
  
  box-sizing: border-box;
  display: flex;

  justify-content: start;
  align-items: flex-end;

  
  overflow: visible;

  flex: 1;
  

  max-width: 100%;
  height: 720px;

  @media ${theme.media.tablet} {
    right: -16px;
    width: 100vw;
    max-height: 900px;
    overflow: hidden;
    
  }

  @media (max-width: 700px) {
    max-height: 820px;
    
    
  }

  @media ${theme.media.mobile} {
   max-height: 680px;
    
    
  }

  @media (max-width: 500px) {
    max-height: 590px;
    
    
  }

  @media (max-width: 400px) {
    max-height: 480px;
    
    
  }

  
  
  @media ${theme.media.minimobile} {
    width: 375px;
    max-height: 450px;
    
    
  }
  
  
`

const Photo = styled.img`
  position: absolute;
  
  overflow: visible;

  object-fit: cover;
  width: 740px;
  height: 740px;

  
  
  mask-image: url("../../../../yellow-bg.svg");
  mask-size: cover;
  mask-position: left bottom;
  mask-repeat: no-repeat;
  
  
  background-color: ${theme.colors.accent};
  z-index: 1;



  @media ${theme.media.tablet} {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
   
    
  }
  
`;

export const S = {
    Main,
    MainSectionWrapper,
    MainTitle,
    ContentWrapper,
    Name,
    PhotoWrapper,
    Photo,
}