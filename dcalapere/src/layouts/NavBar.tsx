import { useState, useEffect, useRef } from "react";
import dc_logo_white from "../assets/icons/dc_logo_white.png";
import { Menu } from "lucide-react";
import { theme } from "../styles/theme";
import {
  NavBarContainer,
  MainMenu,
  MenuList,
  MenuListII,
  IMG,
  A,
  MenuLogo,
  MenuToggle,
  MobileMenuWrapper,
  MobileMenuContent,
  RemoveGPButton,
  MobileMenuContentBorder,
  GiveButton,
  PlanButton,
} from "./NavBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<SVGSVGElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer $isScrolled={isScrolled}>
      <MainMenu>
        <MenuLogo>
          <A
            to="/"
            style={{
              display: "flex",
              textDecoration: "none",
              color: theme.colors.white,
              alignItems: "center",
            }}
          >
            <IMG>
              <img src={dc_logo_white} alt="DC logo" />
            </IMG>
            Dominion City Alapere
          </A>
        </MenuLogo>

        <MenuList>
          <span>
            <A to="/about">About</A>
          </span>
          <span>
            <A to="/#services">Services</A>
          </span>
          <span>
            <A to="/events">Events</A>
          </span>
          <span>
            <A to="/sermons">Sermons</A>
          </span>
          <span>
            <A to="/contact">Contact</A>
          </span>
        </MenuList>

        <MenuListII>
          <A to="/">
            <GiveButton
              style={{
                border: `0.1rem solid ${theme.colors.white}`,
                borderRadius: "3rem",
                padding: "0.3rem 0.8rem 0.3rem 0.8rem",
              }}
            >
              Give
            </GiveButton>
          </A>

          <A to="/">
            <PlanButton
              style={{
                backgroundColor: theme.colors.white,
                color: theme.colors.primary,
                padding: "0.3rem 0.8rem 0.3rem 0.8rem",
                borderRadius: "3rem",
              }}
            >
              Plan Your Visit
            </PlanButton>
          </A>
        </MenuListII>

        <MenuToggle>
          <RemoveGPButton>
            <A to="/give">
              <GiveButton
                style={{
                  border: `0.1rem solid ${theme.colors.white}`,
                  borderRadius: "3rem",
                  padding: "0.3rem 0.8rem 0.3rem 0.8rem",
                }}
              >
                Give
              </GiveButton>
            </A>
            <PlanButton
              style={{
                backgroundColor: theme.colors.white,
                color: theme.colors.primary,
                padding: "0.2rem 0.8rem 0.2rem 0.8rem",
                borderRadius: "3rem",
              }}
            >
              <A to="/planyourvisit">Plan Your Visit</A>
            </PlanButton>
          </RemoveGPButton>

          <Menu
            ref={buttonRef}
            onClick={toggleMenu}
            style={{ display: "flex" }}
          />
        </MenuToggle>
      </MainMenu>

      {isOpen && (
        <MobileMenuWrapper
          ref={menuRef}
          id="menuIcon"
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          <MobileMenuContent>
            <A to="/about">
              <span>About</span>
            </A>
            <A to="/#services" onClick={closeMenu}>
              <span>Services</span>
            </A>
            <A to="/events" onClick={closeMenu}>
              <span>Events</span>
            </A>
            <A to="/sermons" onClick={closeMenu}>
              <span>Sermons</span>
            </A>
            <A to="/contact" onClick={closeMenu}>
              <span>Contact</span>
            </A>

            <MobileMenuContentBorder></MobileMenuContentBorder>

            <A to="/planyourvisit" onClick={closeMenu}>
              <div
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                  textAlign: "center",
                  padding: "0.1rem 0.8rem 0.1rem 0.8rem",
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </div>
            </A>

            <A to="/give" onClick={closeMenu}>
              <div
                style={{
                  border: `0.1rem solid ${theme.colors.primary}`,
                  color: theme.colors.primary,
                  textAlign: "center",
                  borderRadius: "3rem",
                  padding: "0.1rem 0.8rem 0.1rem 0.8rem",
                }}
              >
                Give
              </div>
            </A>
          </MobileMenuContent>
        </MobileMenuWrapper>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
