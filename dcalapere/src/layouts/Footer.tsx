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
  const currentYear: number = new Date().getFullYear();

  return (
    <BgColor>
      <FooterContentA>
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

      <Border></Border>

      <FooterContentB>
        <div>
          <p className="headerContentB">SERVICE TIMES</p>
          <p>Sunday: 8:00 AM - 11:30 AM</p>
          <p>Wednesday: 6:00 PM - 8:00 PM</p>
          <p>Friday: 6:30 PM - 8:30 PM</p>
        </div>

        <div>
          <p className="headerContentB">CONTACT</p>
          <p>dominioncityalapere@gmail.com</p>
          <p>(234) 803 773 8621</p>
        </div>

        <div>
          <p className="headerContentB">LOCATION</p>
          <p>
            2nd Floor Tanterlizer Building, 3 Oluwakemi Street, Alapere
            Roundabout, Lagos
          </p>
        </div>
      </FooterContentB>

      <Border></Border>

      <FooterContentC>
        <div>
          <p className="copyright">
            Copyright © {currentYear} Dominion City Church Alapere
          </p>
        </div>

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
