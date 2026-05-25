import { useState, useEffect, useRef } from "react";
import dc_logo_white from "../assets/dc_logo_white.png";
import { Menu } from "lucide-react";
import {
  NavBarContainer,
  TextColorW,
  MainMenu,
  MenuList,
  MenuListII,
  IMG,
  A,
  MenuLogo,
  MenuToggle,
  MobileMenuWrapper,
  MobileMenuContent,
  PrimaryColor,
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
              color: TextColorW,
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
            <A to="/">Services</A>
          </span>
          <span>
            <A to="/events">Events</A>
          </span>
          <span>
            <A to="/">Sermons</A>
          </span>
          <span>
            <A to="/">Contact</A>
          </span>
        </MenuList>

        <MenuListII>
          <A to="/">
            <GiveButton
              style={{
                border: `0.1rem solid ${TextColorW}`,
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
                backgroundColor: TextColorW,
                color: PrimaryColor,
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
            <A to="/">
              <GiveButton
                style={{
                  border: `0.1rem solid ${TextColorW}`,
                  borderRadius: "3rem",
                  padding: "0.3rem 0.8rem 0.3rem 0.8rem",
                }}
              >
                Give
              </GiveButton>
            </A>
            <PlanButton
              style={{
                backgroundColor: TextColorW,
                color: PrimaryColor,
                padding: "0.2rem 0.8rem 0.2rem 0.8rem",
                borderRadius: "3rem",
              }}
            >
              <A to="/">Plan Your Visit</A>
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
            <A to="/" onClick={closeMenu}>
              <span>Services</span>
            </A>
            <A to="/" onClick={closeMenu}>
              <span>Events</span>
            </A>
            <A to="/" onClick={closeMenu}>
              <span>Sermons</span>
            </A>
            <A to="/" onClick={closeMenu}>
              <span>Contact</span>
            </A>

            <MobileMenuContentBorder></MobileMenuContentBorder>

            <A to="/" onClick={closeMenu}>
              <div
                style={{
                  backgroundColor: PrimaryColor,
                  color: TextColorW,
                  textAlign: "center",
                  padding: "0.1rem 0.8rem 0.1rem 0.8rem",
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </div>
            </A>

            <A to="/" onClick={closeMenu}>
              <div
                style={{
                  border: `0.1rem solid ${PrimaryColor}`,
                  color: PrimaryColor,
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
