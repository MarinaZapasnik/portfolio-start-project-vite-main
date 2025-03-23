

import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

import React from "react";
import { S } from "./Footer_Styles";

const links = ["instagram", "telegram", "gmail"];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" align="center" gap="30px">
          <FlexWrapper justify="center" gap="25px" wrap="wrap">
            {links.map((link) => (
              <Icon key={link} iconId={link} width="50px" height="50px" />
            ))}
          </FlexWrapper>
          <S.CopyRight>
            Adapted from a Figma template, crafted by Marina Zapasnik © 2025
          </S.CopyRight>

          
        </FlexWrapper>
      
      <S.BackGroundSvg>
            <Icon
              iconId="footer"
              viewBox="0 0 1440 344"
              height="344"
              width="1440"
            />
          </S.BackGroundSvg></Container>
    </S.Footer>
  );
};

