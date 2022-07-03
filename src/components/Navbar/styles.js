import styled from "styled-components";

export const Nav = styled.nav`
  padding-top: 64px;
  max-width: 100%;
`;

export const NavContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.a`
  text-decoration: none;
  display: block;
  width: 159px;

  @media screen and (max-width: 480px) {
    width: 127px;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const NavMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10vw;

  @media screen and (max-width: 992px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--dark-color);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled.a`
  font-weight: 600;
  font-size: clamp(var(--17px), 0.2vw + 1rem, var(--18px));
  text-decoration: none;
  color: var(--text-dark);
  display: inline-block;
  position: ${({ position }) => position || ""};
  transition: color 0.3s;

  &:hover {
    color: var(--primary-color);
  }

  @media screen and (max-width: 992px) {
    color: #595976;
    font-size: 24px;

    &:hover {
      color: var(--white-color);
    }
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Burger = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const Cancel = styled.img`
  display: ${({ show }) => (show ? "block" : "none")};
  cursor: pointer;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const SocialIconContainer = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #adadad;
  border: 1px solid #d8d8d8;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--white-color);
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
