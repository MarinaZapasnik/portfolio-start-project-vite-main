


import React from "react";
import { Menu } from "../../../components/menu/Menu";
import { S } from "./HeaderMenu_Styles";


export const DesctopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesctopMenu>
      <Menu menuItems={props.menuItems}></Menu>
      
    </S.DesctopMenu>
  );
};



