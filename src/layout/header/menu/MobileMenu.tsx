


import { Menu } from "../../../components/menu/Menu";

import React, { useState } from "react";
import { S } from "./HeaderMenu_Styles";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
  
  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen)}


  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
          <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} 
      onClick = { () => {setmenuIsOpen(false)}
      }>
        <Menu menuItems={props.menuItems}></Menu>

      </S.MobileMenuPopup>
     
    </S.MobileMenu>
  );
};
