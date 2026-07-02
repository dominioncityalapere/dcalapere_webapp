import NavBar from "../../layouts/NavBar.tsx";
import Footer from "../../layouts/Footer.tsx";
import {
  Check,
  Clock6,
  Clock8,
  MapPin,
  ArrowRightLeft,
  SquareArrowOutUpRight,
} from "lucide-react";
import { PlanContainer, A } from "./PlanPage.styles.ts";
import { theme } from "../../styles/theme.ts";
import dc_logo_white from "../../assets/icons/dc_logo_white.png";

function PlanPage() {
  return (
    <>
      <NavBar />

      <main>
        <PlanContainer>
          <div className="contactTitleContainer">
            <p className="title">Plan Your Visit</p>
            <p>We can't wait to meet you!</p>
          </div>
          <div className="expectContainer">
            <p className="expectTitle">What to Expect</p>
            <p>
              Whether you are visiting for the first time or looking for a
              church family, we welcome you with love and excitement.{" "}
              <br className="desktopBreak" /> Come ready to experience God,
              connect with people, and grow in faith.
            </p>

            <div className="expectContentContainer">
              <div className="eachExpectContent">
                <p>
                  <Check
                    style={{
                      background: theme.colors.darkBg,
                      color: theme.colors.white,
                      padding: "0.5rem",
                      borderRadius: "1.5rem",
                    }}
                  />
                </p>
                <p className="eachExpectContentTitle">A Warm Welcome</p>
                <p>
                  Our team is available to help you feel at home, guide you
                  around, and answer any questions you may have. Come as you
                  are.
                </p>
              </div>

              <div className="eachExpectContent">
                <p>
                  <Check
                    style={{
                      background: theme.colors.darkBg,
                      color: theme.colors.white,
                      padding: "0.5rem",
                      borderRadius: "1.5rem",
                    }}
                  />
                </p>
                <p className="eachExpectContentTitle">Powerful Worship</p>
                <p>
                  Experience heartfelt worship that creates an atmosphere to
                  connect with God and prepare your heart for His presence.
                </p>
              </div>

              <div className="eachExpectContent">
                <p>
                  <Check
                    style={{
                      background: theme.colors.darkBg,
                      color: theme.colors.white,
                      padding: "0.5rem",
                      borderRadius: "1.5rem",
                    }}
                  />
                </p>
                <p className="eachExpectContentTitle">Life-Changing Word</p>
                <p>
                  Receive practical, Bible-based teaching that strengthens your
                  faith and equips you for everyday living.
                </p>
              </div>

              <div className="eachExpectContent">
                <p>
                  <Check
                    style={{
                      background: theme.colors.darkBg,
                      color: theme.colors.white,
                      padding: "0.5rem",
                      borderRadius: "1.5rem",
                    }}
                  />
                </p>
                <p className="eachExpectContentTitle">Children’s Ministry</p>
                <p>
                  Your children will enjoy a safe and engaging environment
                  designed to help them learn, grow, and experience God.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICE TIME */}

          <div className="serviceTimeContainer">
            <p className="serviceTimeTitle">Service Time</p>
            <p>Join us for worship. We'd love to have you!</p>

            <div className="serviceTimeContentContainer">
              <div className="eachserviceTimeContent">
                <div>
                  <p>
                    <Clock8
                      size={35}
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "1rem",
                        borderRadius: "2rem",
                      }}
                    />
                  </p>
                </div>

                <div className="serviceTimeContentB">
                  <p className="eachExpectContentTitle">Sunday Service</p>
                  <p className="eachExpectContentTime">
                    Sundays at 8:30 AM - 11:30 AM
                  </p>
                  <p>
                    Join us for a powerful time of worship, fellowship, and the
                    teaching of God's Word. Experience an atmosphere of faith,
                    love, and transformation for the whole family.
                  </p>
                </div>
              </div>

              <div className="eachserviceTimeContent">
                <div>
                  <p>
                    <Clock6
                      size={35}
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "1rem",
                        borderRadius: "2rem",
                      }}
                    />
                  </p>
                </div>

                <div className="serviceTimeContentB">
                  <p className="eachExpectContentTitle">Midweek Service</p>
                  <p className="eachExpectContentTime">
                    Wednesdays at 6:00 PM - 8:00 PM
                  </p>
                  <p>
                    A time of spiritual growth, prayer, and the teaching of
                    God's Word. Join us as we strengthen our faith and connect
                    with God and one another.
                  </p>
                </div>
              </div>

              <div className="eachserviceTimeContent">
                <div>
                  <p>
                    <Clock6
                      size={35}
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "1rem",
                        borderRadius: "2rem",
                      }}
                    />
                  </p>
                </div>

                <div className="serviceTimeContentB">
                  <p className="eachExpectContentTitle">Friday Meeting</p>
                  <p className="eachExpectContentTime">
                    Fridays at 6:30 PM - 8:30 PM
                  </p>
                  <p>
                    An atmosphere of prayer, worship, and fellowship where we
                    seek God, receive strength, and prepare for the week ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LOCATION & DIRECTIONS */}

          <div className="locationContainer">
            <div className="locationContentContainer">
              <p className="locationTitle">Location & Directions</p>

              <div>
                <div className="eachLocationContent">
                  <p>
                    <MapPin
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "0.5rem",
                        borderRadius: "1.5rem",
                      }}
                    />
                  </p>
                  <div>
                    <p style={{ fontWeight: 600 }}>
                      2nd Floor Tanterlizer Building, 3 Oluwakemi Street
                    </p>
                    <p>Alapere Roundabout, Lagos</p>
                  </div>
                </div>

                <div className="eachLocationContent">
                  <p>
                    <ArrowRightLeft
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "0.5rem",
                        borderRadius: "1.5rem",
                      }}
                    />
                  </p>
                  <div>
                    <p style={{ fontWeight: 600 }}>Parking</p>
                    <p>Parking is available</p>
                  </div>
                </div>

                <div className="eachLocationContent">
                  <p>
                    <Clock6
                      style={{
                        background: theme.colors.darkBg,
                        color: theme.colors.white,
                        padding: "0.5rem",
                        borderRadius: "1.5rem",
                      }}
                    />
                  </p>
                  <div>
                    <p style={{ fontWeight: 600 }}>Service Duration</p>
                    <p>Services typically last about 120 minutes.</p>
                  </div>
                </div>

                <div className="directionButton">
                  <a
                    href="https://maps.app.goo.gl/XqXhTm6ebRER57uc9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="buttonFlex">
                      Get Directions <SquareArrowOutUpRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="embeddedMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4818346952557!2d3.396170875816837!3d6.586871122421971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92ed00000001%3A0x2d62ba9f817d94ad!2sTantalizers%20Alapere%20Ketu!5e0!3m2!1sen!2sng!4v1782055007128!5m2!1sen!2sng"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* MEET YOU */}

          <div className="meetYouContainer">
            <div className="meetYouContent">
              <div>
                <img src={dc_logo_white} alt="DC Logo White" />
              </div>

              <div>
                <p className="meetYouTitle">We Can't Wait to Meet You</p>
                <p>
                  Have questions? Reach out anytime. We're here to help make
                  your first visit a great experience.
                </p>
              </div>

              <div className="meetYouButtons">
                <A to="/contact" className="contactButton">
                  <span>Contact Us</span>
                </A>

                <A to="/sermons" className="watchOnlineButton">
                  <span>Watch Online First</span>
                </A>
              </div>
            </div>
          </div>
        </PlanContainer>
      </main>

      <Footer />
    </>
  );
}

export default PlanPage;
