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
  // Mobile menu visibility state
  const [isOpen, setIsOpen] = useState(false);

  // References used to detect clicks outside the mobile menu
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<SVGSVGElement>(null);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the mobile menu
  const closeMenu = () => setIsOpen(false);

  // Tracks whether the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Close the mobile menu when clicking outside of it
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

  // Update the navigation bar style based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Main navigation bar
    <NavBarContainer $isScrolled={isScrolled}>
      <MainMenu>
        {/* Website logo and home link */}
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

        {/* Desktop navigation links */}
        <MenuList>
          <A to="/about" className="menuList">
            <span>About</span>
          </A>
          <A to="/#services" className="menuList">
            <span>Services</span>
          </A>
          <A to="/events" className="menuList">
            <span>Events</span>
          </A>
          <A to="/sermons" className="menuList">
            <span>Sermons</span>
          </A>
          <A to="/contact" className="menuList">
            <span>Contact</span>
          </A>
        </MenuList>

        {/* Desktop action buttons */}
        <MenuListII>
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

          <A to="/plan">
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

        {/* Mobile navigation controls */}
        <MenuToggle>
          {/* Show Give and Plan Your Visit buttons on larger mobile screens */}
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

            <A to="/plan">
              <PlanButton
                style={{
                  backgroundColor: theme.colors.white,
                  color: theme.colors.primary,
                  padding: "0.2rem 0.8rem 0.2rem 0.8rem",
                  borderRadius: "3rem",
                }}
              >
                Plan Your Visit
              </PlanButton>
            </A>
          </RemoveGPButton>

          {/* Mobile menu toggle button */}
          <Menu
            ref={buttonRef}
            onClick={toggleMenu}
            style={{ display: "flex" }}
          />
        </MenuToggle>
      </MainMenu>

      {/* Mobile navigation menu */}
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
          {/* Mobile navigation links */}
          <MobileMenuContent>
            <A to="/about" onClick={closeMenu} className="mobileMenuList">
              <span>About</span>
            </A>
            <A to="/#services" onClick={closeMenu} className="mobileMenuList">
              <span>Services</span>
            </A>
            <A to="/events" onClick={closeMenu} className="mobileMenuList">
              <span>Events</span>
            </A>
            <A to="/sermons" onClick={closeMenu} className="mobileMenuList">
              <span>Sermons</span>
            </A>
            <A to="/contact" onClick={closeMenu} className="mobileMenuList">
              <span>Contact</span>
            </A>

            {/* Divider between navigation links and action buttons */}
            <MobileMenuContentBorder></MobileMenuContentBorder>

            {/* Mobile Plan Your Visit button */}
            <A to="/plan" onClick={closeMenu}>
              <div className="mobileMenuListPlan">Plan Your Visit</div>
            </A>

            {/* Mobile Give button */}
            <A to="/give" onClick={closeMenu}>
              <div className="mobileMenuListGive">Give</div>
            </A>
          </MobileMenuContent>
        </MobileMenuWrapper>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
