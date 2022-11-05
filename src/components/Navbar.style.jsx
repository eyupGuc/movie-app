import styled from "styled-components";
import { Flex } from "./globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav=styled(Flex)`
background-color: ${({theme})=>theme.colors.navbarBgColor};
padding: 2rem 2.5rem;



`;

export const ProjectName=styled.h3`
color: black;
font-weight: 800;
font-size: 2rem;

`;

export const Menu=styled.div`


`;

export const MenuLink=styled(Link)`
padding: 1rem 0;
color: ${({theme})=>theme.colors.logoColor};
font-weight: 800;
font-size: 2rem;
`;