import styled from "styled-components";
import { Flex } from "./globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav=styled(Flex)`
background-color: ${({theme})=>theme.colors.navbarBgColor};
padding: 1rem 1.5rem;



`;

export const ProjectName=styled.h3`
color: white;
font-weight: 800;
font-size: 1.6rem;

`;

export const Menu=styled.div`


`;

export const MenuLink=styled(Link)`

color:white;
font-weight: 800;
font-size: 1.6rem;
text-decoration: none;
margin: 0 1rem;border:1px solid white;
`;