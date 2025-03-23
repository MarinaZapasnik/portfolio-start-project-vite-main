import styled from "styled-components";


const Header = styled.header`
  height: 56px;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(249 250 255 / 50%);
    

  
  isolation: isolate;
  backdrop-filter: blur(3px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);
  
`;

export const S = {
     Header,
}