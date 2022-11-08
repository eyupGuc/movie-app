import { Menu, MenuLink, Nav, ProjectName } from "./Navbar.style";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useState } from "react";

const Navbar = () => {
  const [person, setPerson] = useState();

  const out = () => {
    signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //  console.log(user);
      setPerson(user);
    } else {
      setPerson();
    }
  });

   console.log(person);
  return (
    <Nav justify="space-between">
      <ProjectName to="/"> Movie App</ProjectName>
      <Menu>
        {!person ? (
          <>
            <MenuLink to="login"> Login</MenuLink>
            <MenuLink to="register"> Register</MenuLink>
          </>
        ) : (
          <>
            <MenuLink to=" "> {person?.displayName || person?.email}</MenuLink>
            <MenuLink onClick={out} to="login">
              Logout
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
