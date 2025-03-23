
import photo from "../../../assets/images/my-photo.png";

import { FlexWrapper } from "../../../components/FlexWrapper";

import { Container } from "../../../components/Container";


import { Button } from "../../../components/button/Button";
import { Description } from "../../../components/Description";

import React from "react";
import { S } from "./Main_Styles";

import Typewriter from 'typewriter-effect';



export const Main: React.FC = () => {
  return (
    <S.Main>
     
      <Container>
        <S.MainSectionWrapper justify="center" align="flex-start">
          
          <FlexWrapper
            direction="column"
            justify="center"
            gap="12px"
            flex="1"
          >
            <S.MainTitle>
              <p>
                Front-end Developer
              </p>
              <Typewriter
                    options={{
                      strings: ['Front-end Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              
              </S.MainTitle>

            <S.ContentWrapper>

              <S.Name>Hello, my name is Marina Zapasnik</S.Name>
              <Description>
                I'm studying front-end development and learning technologies
                such as React and styled-components. I strive to apply the
                knowledge by creating small projects and improving my skills.
                You can add more information on the about page.
              </Description>

              <FlexWrapper gap="12px">
                <Button>Projects</Button>
                <Button>LinkedIn</Button>
              </FlexWrapper>

            </S.ContentWrapper>
          </FlexWrapper>

          <S.PhotoWrapper >
            <S.Photo src={photo} alt="My Photo" />
          </S.PhotoWrapper>

        </S.MainSectionWrapper>
      </Container>
    </S.Main>
  );
};

