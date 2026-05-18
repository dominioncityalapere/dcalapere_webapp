import dc_logo_white from "../assets/dc_logo_white.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import {
  A,
  BgColor,
  FooterContentA,
  FooterContentB,
  FooterContentC,
  WhiteColor,
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
            <A href="">
              <img className="socialMediaIcons" src={facebook} alt="" />
            </A>
            <A href="">
              <img className="socialMediaIcons" src={instagram} alt="" />
            </A>
            <A href="">
              <img className="socialMediaIcons" src={youtube} alt="" />
            </A>
          </div>
        </div>

        <div className="secondGrid">
          <p style={{ color: WhiteColor, fontWeight: "bold" }}>Connect</p>
          <div>
            <A href="">
              <span>Plan Your Visit</span>
            </A>
          </div>
          <div>
            <A href="">
              <span>Service Time</span>
            </A>
          </div>

          <div>
            <A href="">
              <span>Contact Us</span>
            </A>
          </div>
        </div>

        <div className="thirdGrid">
          <p style={{ color: WhiteColor, fontWeight: "bold" }}>Grow</p>
          <div>
            <A href="">
              <span>Sermons</span>
            </A>
          </div>
          <div>
            <A href="">
              <span>Events</span>
            </A>
          </div>

          <div>
            <A href="">
              <span>Give</span>
            </A>
          </div>
        </div>

        <div className="fourthGrid">
          <p style={{ color: WhiteColor, fontWeight: "bold" }}>Resources</p>
          <div>
            <A href="">
              <span>About Us</span>
            </A>
          </div>
          <div>
            <A href="">
              <span>Our Beliefs</span>
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
          <p>Copyright © {currentYear} Dominion City Church Alapere</p>
        </div>

        <div className="textContentC">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </FooterContentC>
    </BgColor>
  );
};
export default Footer;
