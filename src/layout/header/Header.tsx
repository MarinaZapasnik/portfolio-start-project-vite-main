

import { Logo } from "../../components/logo/Logo";

import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

import { S } from "./Header_styles";

import { MobileMenu } from "./menu/MobileMenu";
import { DesctopMenu } from "./menu/DesctopMenu";
import React from "react";



const headerItems = ["Home", "About", "Skills", "Projects", "Contacts"];

export const Header: React.FC = () => {
  
  const [width, setWidth] = React.useState(window.innerWidth);
  const breacpoint = 768;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);


  

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
            <Logo />

            {width < breacpoint ? <MobileMenu menuItems={headerItems}/> :
                                  <DesctopMenu menuItems={headerItems}/>}
        </FlexWrapper>
      </Container>
    </S.Header>
    
  );
};


