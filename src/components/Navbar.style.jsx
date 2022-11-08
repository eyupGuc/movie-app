import styled from "styled-components";
import { Flex } from "./globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 1.5rem;
`;

export const ProjectName = styled(Link)`
  color: aliceblue;
  font-weight: 800;
  font-size: 1.6rem;
  color: aliceblue;
  cursor: pointer;
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled(Link)`
  color: aliceblue;
  font-weight: 800;
  font-size: 1.6rem;
  text-decoration: none;
  margin: 0 1rem;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 10px;
`;
