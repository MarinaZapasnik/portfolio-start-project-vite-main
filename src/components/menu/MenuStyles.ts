import styled from "styled-components";
import { theme } from "../../styles/Theme";

const MenuItem = styled.li`
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.2) translate(-3px);
    }
`;

const Link = styled.a`
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: ${theme.colors.headLine};
`;


export const S = {
    Link,
    MenuItem,
}
