import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoLight from "../../assets/images/logo-white.png";
import burger from "../../assets/icons/burger.png";
import cancel from "../../assets/icons/cancel.png";
import { Button, Dot } from "../../globalStyles";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import * as Styled from "./styles";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Styled.Nav>
      <Styled.NavContainer>
        <Styled.LogoWrapper href="/">
          <Styled.Logo src={logo} alt="Logo" />
        </Styled.LogoWrapper>
        <Styled.NavMenuContainer show={show}>
          <Styled.MobileMenuContainer>
            <Styled.LogoWrapper href="/">
              <Styled.Logo src={logoLight} alt="Mobile Logo" />
            </Styled.LogoWrapper>
            <Styled.Cancel
              onClick={() => setShow(!show)}
              show={show}
              src={cancel}
              alt="cancel"
            />
          </Styled.MobileMenuContainer>
          <Styled.NavMenu>
            <Styled.NavLink href="/">About</Styled.NavLink>
            <Styled.NavLink href="/">Work</Styled.NavLink>
            <Styled.NavLink href="/">Services</Styled.NavLink>
            <Styled.NavLink href="/" position="relative">
              Jobs
              {show || (
                <Dot position="absolute" right="-35px" top="-35px">
                  2
                </Dot>
              )}
            </Styled.NavLink>
          </Styled.NavMenu>
          <Styled.ButtonContainer>
            <Button>Contact Us</Button>
          </Styled.ButtonContainer>

          <Styled.SocialIconContainer>
            <Styled.SocialIcon>
              <BsFacebook />
            </Styled.SocialIcon>
            <Styled.SocialIcon>
              <BsYoutube />
            </Styled.SocialIcon>
            <Styled.SocialIcon>
              <BsInstagram />
            </Styled.SocialIcon>
          </Styled.SocialIconContainer>
        </Styled.NavMenuContainer>
        <Styled.Burger
          onClick={() => setShow(!show)}
          show={show}
          src={burger}
          alt="burger"
        />
      </Styled.NavContainer>
    </Styled.Nav>
  );
};

export default Navbar;
