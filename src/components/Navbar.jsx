

import { Menu, MenuLink, Nav, ProjectName } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="start"  >
     
      <ProjectName>React Movie App</ProjectName>
      <Menu>
        <MenuLink to="/"> Login</MenuLink>
        <MenuLink to="/"> Register</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;