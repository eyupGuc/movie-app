

import { Menu, MenuLink, Nav, ProjectName } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between"  >
     
      <ProjectName>React Movie App</ProjectName>
      <Menu>
        <MenuLink to="login"> Login</MenuLink>
        <MenuLink to="register"> Register</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;