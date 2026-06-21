import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

interface MainMenuProps {
  $isScrolled: boolean;
}

export const NavBarContainer = styled.div<MainMenuProps>`
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.$isScrolled ? theme.colors.darkBg : "transparent"};
  backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(0.625rem)" : "none"};
  -webkit-backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(0.625rem)" : "none"};
`;

export const A = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  /*TABLET */
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  width: 100%;
  padding: 1rem 1rem 1.25rem 1rem;
  text-align: left;
  margin: 3.2rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkBg};
  border-bottom: 0.1rem solid ${theme.colors.borderLine};
  border-top: 0.1rem solid ${theme.colors.borderLine};
  font-size: 0.9rem;

  .mobileMenuList:hover {
    text-decoration: underline;
  }

  .mobileMenuListPlan {
    background: ${theme.colors.primary};
    border: 0.1rem solid ${theme.colors.primary};
    color: ${theme.colors.white};
    text-align: center;
    padding: 0.1rem 0.8rem 0.1rem 0.8rem;
    border-radius: 3rem;

    &:hover {
      background: transparent;
      color: ${theme.colors.primary};
    }
  }

  .mobileMenuListGive {
    border: 0.1rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    text-align: center;
    border-radius: 3rem;
    padding: 0.1rem 0.8rem 0.1rem 0.8rem;

    &:hover {
      border: 0.1rem solid ${theme.colors.white};
      color: ${theme.colors.white};
    }
  }

  /*TABLET */
  @media (min-width: 768px) {
    border-bottom: 0.1rem solid ${theme.colors.borderLine};
    border-top: 0.1rem solid ${theme.colors.borderLine};
    margin: 3.4rem 0 0 0;
  }
`;

export const MobileMenuContentBorder = styled.div`
  padding-top: 0.5rem;
  border-bottom: 0.1rem solid ${theme.colors.borderLine};
  width: 100%;
`;

export const MenuLogo = styled.div`
  display: flex;
  font-size: 0.8rem;
  z-index: 50;

  /* TABLET */
  @media (min-width: 768px) {
    display: flex;
    font-size: 0.9rem;
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const IMG = styled.div`
  display: flex;
  height: 1.1rem;
  width: auto;
  margin-right: 0.4rem;

  /* TABLET */
  @media (min-width: 768px) {
    display: flex;
    height: 1.5rem;
    width: auto;
    margin-right: 0.7rem;
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    height: 2rem;
    width: auto;
    margin-right: 0.7rem;
  }
`;

export const MenuList = styled.span`
  display: none;

  .menuList:hover {
    text-decoration: underline;
  }

  /* TABLET */
  @media (min-width: 768px) {
    display: none;
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 0.9rem;
    font-weight: 1rem;
    color: ${theme.colors.white};
  }
`;

export const MenuListII = styled.span`
  display: none;

  /* DESKTOP */
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    font-weight: 1rem;
    color: ${theme.colors.white};
  }
`;

export const GiveButton = styled.span`
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const PlanButton = styled.span`
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary} !important;
    color: ${theme.colors.white} !important;
  }
`;

export const MenuToggle = styled.div`
  @media (max-width: 768px) {
    display: flex;
    color: ${theme.colors.white};
    position: relative;
    z-index: 50;
  }

  /* TABLET */
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 50;
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const RemoveGPButton = styled.div`
  display: none;

  /* TABLET */
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.7rem;
    font-weight: 1rem;

    &menuListGive:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    display: none;
  }
`;
