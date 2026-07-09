import dc_logo_white from "../assets/icons/dc_logo_white.png";
import { theme } from "../styles/theme";
import {
  A,
  BgColor,
  FooterContentA,
  FooterContentB,
  FooterContentC,
  Border,
} from "./Footer";

const Footer = () => {
  // Current year displayed in the copyright notice
  const currentYear: number = new Date().getFullYear();

  return (
    // Website footer
    <BgColor>
      {/* Main footer content */}
      <FooterContentA>
        {/* Church branding and social media links */}
        <div className="firstGrid full">
          <div>
            <div className="firstGridText">
              <img className="dcLogo" src={dc_logo_white} alt="DC Logo White" />
              <p>Dominion City Alapere</p>
            </div>
            <div>
              <p>Raising leaders that transform society.</p>
            </div>
          </div>

          {/* Social media links */}
          <div className="socialMediaIconsContainer">
            <a
              href="https://web.facebook.com/groups/264198328180602"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/dominion_city_alapere"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@DominionCityAlapere"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick links for connecting with the church */}
        <div className="secondGrid">
          <p style={{ color: theme.colors.white, fontWeight: "bold" }}>
            Connect
          </p>
          <div>
            <A to="/plan">
              <span>Plan Your Visit</span>
            </A>
          </div>
          <div>
            <A to="/#services">
              <span>Service Time</span>
            </A>
          </div>

          <div>
            <A to="/contact">
              <span>Contact Us</span>
            </A>
          </div>
        </div>

        {/* Resources for spiritual growth */}
        <div className="thirdGrid">
          <p style={{ color: theme.colors.white, fontWeight: "bold" }}>Grow</p>
          <div>
            <A to="/sermons">
              <span>Sermons</span>
            </A>
          </div>
          <div>
            <A to="/events">
              <span>Events</span>
            </A>
          </div>

          <div>
            <A to="/give">
              <span>Give</span>
            </A>
          </div>
        </div>

        {/* Additional church resources */}
        <div className="fourthGrid">
          <p style={{ color: theme.colors.white, fontWeight: "bold" }}>
            Resources
          </p>
          <div>
            <A to="/about">
              <span>About Us</span>
            </A>
          </div>
        </div>
      </FooterContentA>

      {/* Footer section divider */}
      <Border></Border>

      {/* Service times, contact details, and church location */}
      <FooterContentB>
        {/* Weekly service schedule */}
        <div>
          <p className="headerContentB">SERVICE TIMES</p>
          <p>Sunday: 8:00 AM - 11:30 AM</p>
          <p>Wednesday: 6:00 PM - 8:00 PM</p>
          <p>Friday: 6:30 PM - 8:30 PM</p>
        </div>

        {/* Church contact information */}
        <div>
          <p className="headerContentB">CONTACT</p>
          <p>dominioncityalapere@gmail.com</p>
          <p>(234) 803 773 8621</p>
        </div>

        {/* Church address */}
        <div>
          <p className="headerContentB">LOCATION</p>
          <p>
            2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
            Roundabout, Lagos
          </p>
        </div>
      </FooterContentB>

      {/* Footer section divider */}
      <Border></Border>

      {/* Copyright and legal information */}
      <FooterContentC>
        <div>
          {/* Copyright notice */}
          <p className="copyright">
            Copyright © {currentYear} Dominion City Church Alapere
          </p>
        </div>

        {/* Privacy policy */}
        <div className="textContentC">
          <a
            href="https://www.dominioncity.cc/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </FooterContentC>
    </BgColor>
  );
};

export default Footer;
